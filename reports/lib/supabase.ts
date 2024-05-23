import axios from 'axios';
// Configuração do Axios
const supabaseUrl = 'https://wqhvxwbylgyhcbwfvvgc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaHZ4d2J5bGd5aGNid2Z2dmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MDg2NzYsImV4cCI6MjAzMTk4NDY3Nn0.U19JkAT8AKepI2a_H3wWYVNKgY5iDrQ3Jq-WtbenvG8&&';
const api = axios.create({
  baseURL: supabaseUrl,
  headers: {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`
  }
});

export default api;

