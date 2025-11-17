const Menu = () => {
  const menuItems = [
    {
      name: 'Combo Bowl',
      img: '/assets/images/combo.avif',
      description: 'The best of both worlds! A delicious blend of tender lamb and chicken gyro served over fluffy rice with fresh veggies and our signature tzatziki sauce.'
    },
    {
      name: 'Lamb Gyro',
      img: '/assets/images/lambgyro.avif',
      description: 'Our signature dish! Perfectly seasoned lamb gyro wrapped in warm pita bread with crisp lettuce, tomatoes, onions, and creamy tzatziki sauce.'
    },
    {
      name: 'Chicken Bowl',
      img: '/assets/images/chickenbowl.avif',
      description: 'Tender marinated chicken served over a bed of rice with fresh vegetables, topped with our house-made tzatziki and a drizzle of olive oil.'
    },
    {
      name: 'Chicken Wrap',
      img: '/assets/images/chickenwrap.avif',
      description: 'Juicy grilled chicken wrapped in soft pita with fresh veggies and our special sauce. Perfect for a quick, satisfying meal on the go.'
    },
    {
      name: 'Lamb Fries',
      img: '/assets/images/lambfries.avif',
      description: 'Crispy golden fries loaded with savory lamb gyro, melted cheese, fresh vegetables, and a generous drizzle of tzatziki sauce. A customer favorite!'
    },
    {
      name: 'Baklava',
      img: '/assets/images/baklava.avif',
      description: 'Traditional Greek dessert made with layers of flaky phyllo dough, honey, and crushed nuts. The perfect sweet ending to your meal.'
    }
  ];

  return (
    <section className="relative overflow-hidden text-white pb-16 px-8">
        {/* Page Title */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            Our Menu
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto">
            Discover our authentic Greek flavors. Every dish is made fresh with premium ingredients and traditional recipes.
          </p>
        </div>

        {/* Menu Items List */}
        <div className="max-w-5xl mx-auto space-y-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-bold text-lg px-4 py-2 rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                    {item.name}
                  </h2>
                  <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="https://order.online/store/gyro-guys-houston-441834/?hideModal=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl text-center inline-block w-fit"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Menu;
