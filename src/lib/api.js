import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrqssipgfcwnxaqinwmv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycXNzaXBnZmN3bnhhcWlud212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0OTU5MjgsImV4cCI6MjAxMjA3MTkyOH0.sVYHg7fPITWcT0B_0ZvYq6Pd1RuNqTzgW9cquYIV0ds";
export const supabase = createClient(supabaseUrl, supabaseKey);
