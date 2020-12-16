import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bkgykqxqnbxmiucsvjhx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjA4MTAxMDMxLCJleHAiOjE5MjM2NzcwMzF9.c4efqleBoybtcJ-jo1VSB_MmmzFnfLdMXVDiStR2qKQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
