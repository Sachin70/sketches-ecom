let _url = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000'
if (!_url.startsWith('http')) {
  _url = `https://${_url}`
}

export const siteConfig = {
  name: 'Atelier',
  fullName: 'Atelier Designs',
  description:
    'Hand-drawn dress designs for women and girls. Digital files, commercial license, instant delivery.',
  url: _url,
  copyrightYear: new Date().getFullYear(),
} as const
