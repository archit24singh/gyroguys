import Menu from '../components/Menu';
import Footer from '../components/Footer';

const MenuPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center pt-32">
      <Menu />
      <Footer />
    </div>
  );
};

export default MenuPage;
