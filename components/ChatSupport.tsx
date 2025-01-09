'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { supabase } from '@/app/lib/supabase';

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'support';
  created_at: string;
}

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !conversationId) {
      setConversationId(crypto.randomUUID());
    }
  }, [isOpen, conversationId]);

  useEffect(() => {
    if (conversationId) {
      const channel = supabase.channel(`chat:${conversationId}`);
      const subscription = channel
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages',
            filter: `conversation_id=eq.${conversationId}`,
          },
          (payload) => {
            const newMessage = payload.new as Message;
            setMessages((prev) => [...prev, newMessage]);
          }
        )
        .subscribe();

      return () => {
        channel.unsubscribe();
      };
    }
  }, [conversationId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !conversationId) return;

    try {
      const { error } = await supabase.from('chat_messages').insert([
        {
          content: message,
          sender_type: 'user',
          conversation_id: conversationId,
        },
      ]);
      if (error) throw error;

      setMessage('');
      setIsTyping(true);

      setTimeout(async () => {
        const { error: supportError } = await supabase.from('chat_messages').insert([
          {
            content: "Merci pour votre message. Notre équipe vous répondra bientôt.",
            sender_type: 'support',
            conversation_id: conversationId,
          },
        ]);
        if (supportError) console.error('Error sending support message:', supportError);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Échec de l\'envoi du message. Veuillez réessayer.');
    }
  }, [message, conversationId]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[70vh] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="p-4 bg-indigo-600 text-white flex items-center justify-between">
            <h2 className="text-xl font-semibold">Support Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Fermer le chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender_type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`${
                    msg.sender_type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  } p-3 rounded-lg max-w-[80%] break-words`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 h-3 w-3 rounded-full animate-pulse"></div>
                <div className="bg-gray-300 h-3 w-3 rounded-full animate-pulse animation-delay-200"></div>
                <div className="bg-gray-300 h-3 w-3 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-gray-50 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez un message..."
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-r-md px-6 py-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              aria-label="Envoyer le message"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}