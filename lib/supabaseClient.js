import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kskkfvjmwalyrgclmatt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtza2tmdmptd2FseXJnY2xtYXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MzYwNDYsImV4cCI6MjA0MTMxMjA0Nn0.STF06116PajlEyfi6L2nEZzY0-zS-l-KV5ksxlGYXks";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);