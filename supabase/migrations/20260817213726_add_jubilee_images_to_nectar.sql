-- Add the banner/screenshots for Nectar (JubileeMedia) now that they've
-- been uploaded to storage under portofolio/jubilee.
update public.projects
set
  banner_url = 'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/banner.png',
  images = array[
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/nectar-1.png',
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/nectar-2.png',
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/nectar-3.png',
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/nectar-4.png',
    'https://yqxldkqfpjnkmjcjuvgb.supabase.co/storage/v1/object/public/portofolio/jubilee/nectar-5.png'
  ]
where title = 'Nectar';
