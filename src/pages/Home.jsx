import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <main className="bg-gray-900 min-h-screen w-full flex flex-col items-center pt-32">
      <Hero />
      <Showcase />
      <Footer />
    </main>
  );
};

export default Home;
