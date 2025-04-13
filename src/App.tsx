import { Routes, Route,Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Carousel from './pages/Carousel'
import { FeatureProducts } from './components/FeatureProduct';

function Home() {
  return (

    // Carousel Demo
    
    <div className="min-h-screen">
      {/* Hero Section */}
      <Carousel></Carousel>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Crafting Excellence in Every Cut</h2>
              <p className="text-gray-600 mb-6">
                At CadgeTools, we combine cutting-edge technology with decades of expertise to deliver precision-engineered endmills that set new industry standards. Our commitment to innovation and quality ensures optimal performance for your manufacturing needs.
              </p>
              <button className="text-primary hover:text-blue-700 font-semibold">
                Discover Our Story
              </button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">1000+</div>
                <div className="text-gray-600">Clients Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-gray-600">Precision Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <FeatureProducts/>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Manufacturing?</h2>
          <p className="text-gray-600 mb-8">Get in touch with our experts today</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            <Link to='/Contact/'>Request a Quote</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;