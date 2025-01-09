'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, MessageSquare, ThumbsUp } from 'lucide-react';
import { supabase } from '@/app/lib/supabase';

export function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Veuillez sélectionner une note.');
      return;
    }
    if (!category) {
      alert('Veuillez sélectionner une catégorie.');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('feedback').insert([
        { rating, message: feedback, category },
      ]);

      if (error) throw error;
      setIsSubmitted(true);
      setFeedback('');
      setRating(0);
      setCategory('');
    } catch (error) {
      console.error("Erreur lors de l'envoi du feedback :", error);
      alert('Échec de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  }, [rating, feedback, category]);

  const handleStarClick = useCallback((star: number) => {
    setRating(star);
  }, []);

  const handleStarHover = useCallback((star: number) => {
    setHoveredStar(star);
  }, []);

  if (isSubmitted) {
    return (
      <div
        className={`fixed bottom-4 left-4 md:top-1/2 md:left-8 md:transform md:-translate-y-1/2 w-full max-w-sm md:w-80 text-center p-6 bg-gradient-to-b from-white to-gray-100 shadow-xl rounded-lg z-50 transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ThumbsUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Merci !</h2>
        <p className="text-sm text-gray-600">Votre avis a été soumis avec succès.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Donner un autre avis
        </button>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-4 left-4 md:top-1/2 md:left-4 md:transform md:-translate-y-1/2 w-full max-w-sm md:w-80 bg-gradient-to-b from-white to-gray-100 p-6 rounded-2xl shadow-xl z-50 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Donnez votre avis</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Votre note :
          </label>
          <div className="flex justify-start gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => handleStarHover(0)}
                className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredStar || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie :
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Bug">Bug</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
            Commentaire :
          </label>
          <textarea
            id="feedback"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            placeholder="Partagez votre expérience..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Envoi...
            </span>
          ) : (
            <>
              <MessageSquare className="h-4 w-4 mr-1" />
              Envoyer
            </>
          )}
        </button>
      </form>
    </div>
  );
}
