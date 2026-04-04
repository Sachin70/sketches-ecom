export const siteConfig = {
  name: 'Atelier',
  fullName: 'Atelier Designs',
  description:
    'Hand-drawn dress designs for women and girls. Digital files, commercial license, instant delivery.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  copyrightYear: new Date().getFullYear(),
} as const
