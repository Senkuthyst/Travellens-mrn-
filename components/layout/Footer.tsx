import Link from 'next/link'
import { Compass, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Explore Destinations', href: '/explore' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'For Schools', href: '#schools' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Mission', href: '#mission' },
      { label: 'Partnerships', href: '#partnerships' },
      { label: 'Careers', href: '#careers' },
    ],
    Resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Cultural Guide', href: '#guide' },
      { label: 'Travel Tips', href: '#tips' },
      { label: 'FAQ', href: '#faq' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Accessibility', href: '#accessibility' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Compass className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">
                Travel<span className="text-primary-400">Lens</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Turn tourism into learning. Turn learning into journeys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} TravelLens. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ for responsible travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
