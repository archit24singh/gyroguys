import Footer from '../components/Footer';

const LocationsPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center pt-32">
      {/* Locations Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 flex-grow flex flex-col items-center">
        {/* Page Title */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          Our Locations
        </h1>

        {/* Location Image */}
        <div className="relative w-full max-w-2xl h-96 mb-12 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/assets/images/location.webp"
            alt="Houston - Pearland"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location Details */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Houston - Pearland
          </h2>

          <div className="flex flex-col items-center space-y-4">
            <p className="font-body text-xl text-white/80 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              12403 Scarsdale Blvd, Houston, TX, 77089
            </p>
            <p className="font-body text-xl text-white/80 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon-Sun: 11am - 10pm
            </p>
          </div>
        </div>

        {/* Order Now Button */}
        
      </div>

      <Footer />
    </div>
  );
};

export default LocationsPage;
