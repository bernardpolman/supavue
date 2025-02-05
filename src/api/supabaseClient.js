import { createClient } from '@supabase/supabase-js'

var supabase_url = import.meta.env.VITE_SUPABASE_URL
var supabase_anon_key = import.meta.env.VITE_SUPABASE_KEY
export const supabaseClient = createClient(supabase_url, supabase_anon_key)
