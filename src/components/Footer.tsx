import Link from 'next/link'
import { Instagram, Twitter, Paintbrush as Pinterest } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-foreground font-bold">A</span>
              </div>
              <span className="text-lg font-playfair font-bold">StitchoralLab</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Crafting elegance, one design at a time.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">All Designs</Link></li>
              <li><Link href="/shop?category=women" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Women</Link></li>
              <li><Link href="/shop?category=girls" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Girls</Link></li>
              <li><Link href="/custom" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Custom Orders</Link></li>
              <li><Link href="/wishlist" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Pinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; {siteConfig.copyrightYear} {siteConfig.fullName}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
