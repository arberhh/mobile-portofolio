import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types";

const supabaseUrl = "https://jzidiykikyuttyzmitdf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6aWRpeWtpa3l1dHR5em1pdGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTExOTMsImV4cCI6MjAyNDI2NzE5M30.2v7Uk2Z2q4zXO4RVXu4DdqYR5NjQGM62sAR0g0VLodw";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
