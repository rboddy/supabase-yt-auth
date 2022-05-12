import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://hwqgcgxtyxbdtjchzxuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3cWdjZ3h0eXhiZHRqY2h6eHV6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MjI3NzAxOCwiZXhwIjoxOTY3ODUzMDE4fQ.GLJA0by6qTWae6zf0_P6o5c7fCWF-nX4VTr5MG06FFQ')

export default supabase;