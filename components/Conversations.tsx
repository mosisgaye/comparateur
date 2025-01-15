"use client";

import React, { useEffect, useState } from "react";
import { getConversations } from "@/utils/supabase/conversations";

type Conversation = {
  id: string;
  title: string;
  created_at: string;
};

const Conversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const data = await getConversations();
      setConversations(data); // Plus d'erreur ici
    };

    fetchConversations();
  }, []);

  return (
    <div>
      <h1>Conversations</h1>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            {conversation.title} -{" "}
            {new Date(conversation.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conversations;
