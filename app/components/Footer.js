import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">LENS & LIGHT</h3>
          <p className="text-sm">Capturing lifes unforgettable moments.</p>
        </div>
        <div>
          <h4 className="text-lg text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg text-white font-semibold mb-4">Connect</h4>
          <p className="text-sm">
            {/* Add social media links here later */}
            Email: info@lensandlight.com
          </p>
        </div>
      </div>
      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-8">
        © {new Date().getFullYear()} Lens & Light Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
