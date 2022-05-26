import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://hwqgcgxtyxbdtjchzxuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3cWdjZ3h0eXhiZHRqY2h6eHV6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MjMyMTUxMCwiZXhwIjoxOTY3ODk3NTEwfQ.uRY_-S1vuyMWSmRS6WR8WkBkxFcBVjD_DYqtLiqBUVE')

export default supabase;