import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tppuilqbxerqcpndcnim.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwcHVpbHFieGVycWNwbmRjbmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTEyMzMsImV4cCI6MjAzMTE4NzIzM30.8QTDJ7lGzaCmvIsjBoll8F3WEn6q633zCkRMJjUUvVU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);