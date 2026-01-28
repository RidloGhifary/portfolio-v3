import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Ridlo Achmad Ghifary',
  description:
    "Hello, I'm Ridlo. I am a fullstack web developer from Indonesia. I enjoy building sites and apps. My focus is React (Next.js).",
  keywords: [
    'Ridlo Achmad Ghifary',
    'Fullstack developer',
    'Indonesia',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
