'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/app/lib/supabase';
import { cn } from '@/utils/cn';

interface Message {
  id: string;
  content: string;
  created_at: string;
  sender_type: 'user' | 'support';
  is_deleted: boolean;
}

interface Conversation {
  id: string;
  created_at: string;
  status: 'active' | 'closed' | 'archived';
  last_message_at: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (conversation) {
      const channel = supabase
        .channel(`chat:${conversation.id}`)
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages',
            filter: `conversation_id=eq.${conversation.id}`,
          },
          (payload) => {
            const newMessage = payload.new as Message;
            if (!newMessage.is_deleted) {
              setMessages((current) => [...current, newMessage]);
            }
          }
        )
        .subscribe();

      // Load existing messages
      const loadMessages = async () => {
        const { data: existingMessages } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('conversation_id', conversation.id)
          .eq('is_deleted', false)
          .order('created_at', { ascending: true });

        if (existingMessages) {
          setMessages(existingMessages);
        }
      };

      loadMessages();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [conversation]);

  const createConversation = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('conversations')
      .insert([{ 
        title: 'New Conversation',
        status: 'active'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating conversation:', error);
      return;
    }

    setConversation(data);
    setIsLoading(false);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !conversation) return;

    setIsLoading(true);
    const { error } = await supabase.from('chat_messages').insert([
      {
        conversation_id: conversation.id,
        content: message,
        sender_type: 'user',
        is_deleted: false
      },
    ]);

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    setMessage('');
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            if (!conversation) createConversation();
          }}
          className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        <div className="w-[380px] h-[600px] bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-semibold">Compareprix</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-800">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 py-8">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Send a message to start the conversation</p>
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn('flex', msg.sender_type === 'support' ? 'justify-start' : 'justify-end')}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-2',
                    msg.sender_type === 'support'
                      ? 'bg-slate-700 text-slate-100'
                      : 'bg-blue-600 text-white'
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-slate-800 text-slate-100 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:bg-slate-700 placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}