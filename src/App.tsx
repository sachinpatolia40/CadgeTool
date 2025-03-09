import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Precision Engineered Endmills for<br />Superior Performance</h1>
          <p className="text-xl mb-8">Advancing Manufacturing Through Innovation</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Explore our product
          </button>
        </div>
      </section>

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'High-Speed Steel Endmills',
                description: 'Optimal performance for standard machining operations',
                image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80'
              },
              {
                title: 'Carbide Endmills',
                description: 'Superior hardness and wear resistance',
                image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80'
              },
              {
                title: 'Specialty Cutters',
                description: 'Custom solutions for unique applications',
                image: 'https://images.unsplash.com/photo-1589793080380-6089f6eb360e?auto=format&fit=crop&q=80'
              },
              {
                title: 'Micro Tools',
                description: 'Precision tools for intricate operations',
                image: 'https://images.unsplash.com/photo-1590959651057-aaa98cd04fb2?auto=format&fit=crop&q=80'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-primary hover:text-blue-700 font-semibold">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Manufacturing?</h2>
          <p className="text-gray-600 mb-8">Get in touch with our experts today</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Request a Quote
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