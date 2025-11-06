import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ContentShowcase from './components/ContentShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ContentShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
