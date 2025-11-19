const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white py-24 px-8">
      {/* CTA Section */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto mb-20">
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 text-center">
          Hungry Yet?
        </h2>
        <p className="font-body text-xl md:text-2xl text-white/90 text-center mb-12 max-w-2xl">
          Fresh, fast, and authentic. Get your gyro fix today.
        </p>
        <a
          href="https://order.online/store/gyro-guys-houston-441834/?hideModal=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
        >
          Order Now
        </a>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto mb-20">
        {/* Info Column */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Info
          </h3>
          <ul className="space-y-3 text-center">
            <li>
              <a href="#location" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Location
              </a>
            </li>
            <li>
              <a href="#hours" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Hours
              </a>
            </li>
            <li>
              <a href="#contact" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Menu Column */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Menu
          </h3>
          <ul className="space-y-3 text-center">
            <li>
              <a href="#menu" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Gyro Wraps
              </a>
            </li>
            <li>
              <a href="#menu" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Bowls
              </a>
            </li>
            <li>
              <a href="#menu" className="font-body text-lg text-white/80 hover:text-orange-400 transition-colors duration-200">
                Sides & Desserts
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Follow Us
          </h3>
          <div className="flex gap-6 justify-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/gyroguyshouston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/gyroguyshouston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@gyroguyshouston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-all duration-200 hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full max-w-6xl mx-auto pt-8 text-center">
        <p className="font-body text-base md:text-lg text-white/60">
          &copy; {new Date().getFullYear()} The Gyro Guys. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
