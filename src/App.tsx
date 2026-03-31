import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import About from './pages/About';
import Carousel from './pages/Carousel'
import { FeatureProducts } from './components/FeatureProduct';
import { Helmet } from "react-helmet-async";

function Home() {
  return (

    // Carousel Demo
    <>
      <Helmet>
        <title>Solid Carbide Cutting Tools Manufacturer in India | CadgeTools</title>
        <meta name="description" content="CadgeTools is a leading manufacturer of solid carbide end mills and drills in India. High-performance CNC cutting tools for precision machining and industrial applications." />
        <meta name="keywords" content="end mill manufacturer India, carbide end mills, drill manufacturer India, CNC cutting tools, solid carbide tools, industrial cutting tools" />
        <link rel="canonical" href="https://www.cadgetools.com/" />
        <meta property="og:title" content="CadgeTools - Precision End Mills & Drills Manufacturer in India" />
        <meta property="og:description" content="Leading manufacturer of solid carbide end mills and drills for CNC machining and industrial applications across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cadgetools.com/" />
        <meta property="og:image" content="https://www.cadgetools.com/og/home.png" />
      </Helmet>
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <Carousel></Carousel>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">Solid Carbide Cutting Tools Manufacturer in India</h1>
                <p className="text-gray-600 mb-6">
                  CadgeTools is an ISO 9001:2015 certified manufacturer of solid carbide cutting tools based in Ahmedabad, India. We specialize in precision-engineered end mills, drills, and custom tooling solutions for CNC machining and industrial applications.
                  At Cadge (Carbide+Edge), we combide cutting - edge technology with decades of expertise to deliver Precision - engineered Solid Carbide Cutting Tools that set new industry standards. Our commitment to innovation and quality ensures optimal performance for your manufacturing needs.
                </p>
                <button className="text-primary hover:text-blue-700 font-semibold">
                  <Link to={`${import.meta.env.BASE_URL}about`} >Know more about us</Link>
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
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
        <FeatureProducts />

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Manufacturing?</h2>
            <p className="text-gray-600 mb-8">Get in touch with our experts today</p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              <Link to={`${import.meta.env.BASE_URL}Contact`} >Request a Quote</Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Home />} />
        <Route path={`${import.meta.env.BASE_URL}about`} element={<About />} />
        <Route path={`${import.meta.env.BASE_URL}services`} element={<Services />} />
        <Route path={`${import.meta.env.BASE_URL}contact`} element={<Contact />} />
        <Route path={`${import.meta.env.BASE_URL}products`} element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;