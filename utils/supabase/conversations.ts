import { createClient } from "./client";

// Récupérer toutes les conversations
export const getConversations = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur lors de la récupération des conversations:", error);
    return [];
  }

  return data;
};

// Ajouter une conversation
export const addConversation = async (title: string, userId: string | null) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("conversations")
    .insert([{ title, user_id: userId }]);

  if (error) {
    console.error("Erreur lors de l'ajout de la conversation:", error);
    return null;
  }

  return data;
};
