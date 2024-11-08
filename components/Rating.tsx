'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const reviews = [
  { name: "Elisabeth", date: "il y a 2 jours", rating: 5, text: "Merci Noemie pour ce mail précis et sympathique qui humanise les liens avec vos clients.", icon: "/images/1.png" },
  { name: "Axelle", date: "il y a 2 jours", rating: 5, text: "Expérience toujours super! Que ce soit au niveau des services que de la qualité des échanges.", icon: "/images/2.png" },
  { name: "Hugo", date: "il y a 2 jours", rating: 5, text: "Service client très pro et agréable et surtout pas délocalisé ...", icon: "/images/3.png" },
  { name: "Pauline", date: "il y a 3 jours", rating: 4, text: "Très bon service, mais il y a toujours place à amélioration.", icon: "/images/4.png" },
  { name: "Michel", date: "il y a 4 jours", rating: 5, text: "Rapide et efficace, je recommande vivement!", icon: "/images/5.png" },
];

const Rating = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);

  // Auto scroll through reviews every 3 seconds, showing only 3 at a time
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000); // Adjust time as needed

    return () => clearInterval(interval);
  }, []);

  // Function to move to the next set of reviews
  const nextReview = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to move to the previous set of reviews
  const prevReview = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Determine the visible reviews (only 3 at a time)
  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0f2433] px-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-slate-50 mb-4">
          Ce que nos clients disent
        </h2>
        <p className="text-sm md:text-lg text-black dark:text-white max-w-3xl mx-auto">
          Vos <span className="underline text-blue-400">avis clients</span> nous permettent chaque jour de nous améliorer afin qu’en tant que fournisseur d’énergie verte on puisse vous proposer des offres d’énergie renouvelable toujours plus proches de vos attentes et de votre budget.
        </p>
      </div>

      {/* Rating Summary */}
      <div className="flex justify-center items-center text-white mb-8">
        <span className="text-yellow-400 text-2xl mr-2">★ ★ ★ ★ ★</span>
        <span className="text-lg text-black dark:text-white">4.9 évaluation de 3491 avis</span>
      </div>

      {/* Chevron Buttons */}
      <div className="flex justify-center items-center space-x-4">
        <button onClick={prevReview} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
          ◀
        </button>

        {/* Reviews */}
        <div ref={scrollRef} className="flex justify-center space-x-4 py-10">
          {visibleReviews.map((review, index) => (
            <div key={index} className="bg-[#fff] dark:bg-[#012737] w-72 p-6 rounded-xl shadow-lg text-black dark:text-white relative flex-shrink-0">
              {/* User Icon */}
              <div className="absolute top-[-30px] left-[10px] w-[50px] h-[50px] bg-[#2d3b47] rounded-full flex items-center justify-center text-white">
                <Image src={review.icon} alt={review.name} width={50} height={50} />
              </div>

              {/* Review Info */}
              <div className="ml-14 text-black dark:text-white">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-sm text-gray-400">{review.date}</p>

                {/* Rating */}
                <div className="mt-2 text-yellow-400">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm text-black dark:text-white">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextReview} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
          ▶
        </button>
      </div>
    </div>
  );
};

export default Rating;
