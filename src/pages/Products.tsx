import { useEffect, useState } from 'react';
import { FaSearch, FaThLarge, FaList } from 'react-icons/fa';
import { products } from '../data/products';
import Modal from '../components/Modal';
import { Product } from '../types/product';
import { Helmet } from "react-helmet-async";
import { seoProductData } from '../data/SEOProductData'

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterProducts, setFilterProducts] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAllSeo, setShowAllSeo] = useState(false);

  const visibleSeoData = showAllSeo
    ? seoProductData
    : seoProductData.slice(0, 6);
  useEffect(() => {
    setFilterProducts(
      products.filter(value =>
        value.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Helmet>
        <title>
          Solid Carbide End Mills & Drills in Kathwada | CadgeTools India
        </title>

        <meta
          name="description"
          content="Buy precision solid carbide end mills, drills, thread mills, and specialty cutting tools in Kathwada, Ahmedabad. CadgeTools manufactures premium CNC cutting tools with fast delivery across India."
        />

        <meta
          name="keywords"
          content="carbide end mills Kathwada, solid carbide drills Kathwada, CNC cutting tools Kathwada"
        />

        <link
          rel="canonical"
          href="https://www.cadgetools.com/products"
        />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-b from-slate-50 via-white to-slate-100">

        {/* ================= HERO SECTION ================= */}

        <div className="relative overflow-hidden bg-[#0B1120] py-24">

          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-sm font-medium backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              ISO 9001:2015 Certified Manufacturer
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-black leading-[1.1] text-white tracking-tight mb-8">
              Precision Carbide  Cutting Tools <span className="text-blue-400">in Kathwada</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
              High-performance solid carbide end mills, drills, thread mills, and CNC cutting tools engineered for industrial machining applications across automotive, aerospace, die & mold, and precision engineering industries.
            </p>
          </div>
        </div>

        {/* ================= SEARCH SECTION ================= */}

        <div className="bg-white border-b border-slate-100 py-8">

          <div className="container mx-auto px-4">

            <div className="flex flex-col md:flex-row gap-5 items-center justify-between">

              {/* Search */}

              <div className="w-full md:flex-1">

                <div className="relative">

                  <input
                    type="text"
                    placeholder="Search end mills, drills, cutting tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                  />

                  <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />

                </div>
              </div>

              {/* View Buttons */}

              <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-1">

                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-white'
                    }`}
                >
                  <FaThLarge />
                </button>

                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-white'
                    }`}
                >
                  <FaList />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}

        <div className="container mx-auto px-4 py-16 max-w-7xl">

          <div className="flex justify-between items-center mb-10">

            <div className="text-slate-600 font-medium text-lg">
              {filterProducts.length} Products Available
            </div>

          </div>

          <div
            className={`grid ${viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
              : 'grid-cols-1'
              } gap-8`}
          >

            {filterProducts.map((product) => (
              <div
                key={product.id}
                className={`group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${viewMode === 'list'
                        ? 'w-full md:w-72 h-72'
                        : 'w-full h-64'
                      }`}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7 flex flex-col justify-between flex-1">

                  <div>

                    {/* TITLE */}
                    <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h2>

                    <p className="text-sm text-slate-500 mb-4">
                      SKU: {product.sku}
                    </p>

                    {/* SPECS */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">
                        {product.specs.flutes} Flute
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">
                        {product.specs.diameter}mm
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">
                        {product.specs.material}
                      </span>
                    </div>

                    {/* ================= SEO COLLAPSIBLE ================= */}
                    {product.ProductSEO && (
                      <div className="mt-4 border border-blue-100 rounded-2xl bg-blue-50/40 overflow-hidden">

                        <details className="group">

                          {/* HEADER */}
                          <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
                            <span className="text-sm font-semibold text-blue-700">
                              Technical Details
                            </span>

                            <span className="text-blue-600 text-sm transition-transform group-open:rotate-45">
                              +
                            </span>
                          </summary>

                          {/* BODY */}
                          <div className="px-4 pb-4 space-y-3">

                            {/* TITLE / KEYWORD */}
                            <div>
                              <p className="text-xs font-semibold text-slate-700">
                                {product.ProductSEO.title}
                              </p>

                              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                {product.ProductSEO.description}
                              </p>
                            </div>

                            {/* APPLICATIONS */}
                            <div className="border-t pt-3">
                              <p className="text-xs font-semibold text-slate-700">
                                Applications
                              </p>

                              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                                {product.ProductSEO.applications}
                              </p>
                            </div>

                          </div>

                        </details>

                      </div>
                    )}

                  </div>

                  {/* CTA */}
                  <div className="flex justify-end mt-6">
                    <button
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-blue-200 transition-all duration-300"
                      onClick={() => openModal(product)}
                    >
                      View Details →
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SEO SECTION ================= */}

        <section className="bg-gradient-to-b from-slate-50 to-white py-24">

          <div className="container mx-auto px-4">

            {/* HEADER */}

            <div className="text-center max-w-4xl mx-auto mb-16">

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-5">
                COMPLETE PRODUCT CATALOG
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Industrial CNC Cutting Tools <br />
                Built for Performance
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed">
                Explore our complete range of solid carbide end mills, drills, thread mills, and specialty CNC tooling solutions designed for high-precision industrial machining applications.
              </p>

            </div>

            {/* GRID */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {visibleSeoData.map((item, index) => (

                <article
                  key={index}
                  className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-2"
                >

                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-5">
                    {item.subtitle}
                  </h4>

                  <p className="text-sm text-slate-600 leading-7 mb-5">
                    {item.description}
                  </p>

                  <p className="text-sm text-slate-600 leading-7">
                    {item.applications}
                  </p>

                </article>
              ))}
            </div>

            {/* BUTTON */}

            <div className="flex justify-center mt-12">

              <button
                onClick={() => setShowAllSeo(!showAllSeo)}
                className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg"
              >
                {showAllSeo ? 'Show Less' : 'Show More Products'}
              </button>

            </div>

          </div>
        </section>


        {/* ================= MODAL ================= */}

        <Modal isOpen={isModalOpen} onClose={closeModal}>

          {selectedProduct && (

            <div className="p-2">

              {/* HEADER */}

              <div className="mb-8">

                <h2 className="text-3xl font-black text-slate-900 mb-2">
                  {selectedProduct.name}
                </h2>

                <p className="text-slate-500">
                  SKU: {selectedProduct.sku}
                </p>

              </div>

              {/* TOP SECTION */}

              <div className="flex flex-col xl:flex-row gap-10 mb-12">

                {/* LEFT IMAGE */}

                <div className="xl:w-1/2">

                  <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-6 shadow-sm">

                    <img
                      src={selectedProduct.techSketch}
                      alt="Product Technical Drawing"
                      className="w-full rounded-2xl"
                    />

                  </div>
                </div>

                {/* RIGHT CONTENT */}

                <div className="xl:w-1/2">

                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

                    <div className="flex items-center gap-3 mb-8">

                      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          Technical Parameters
                        </h3>

                        <p className="text-slate-500 text-sm">
                          Precision engineered specifications
                        </p>
                      </div>

                    </div>

                    <div className="space-y-4">

                      {selectedProduct.technicalParameter.map((param, index) => (

                        <div
                          key={index}
                          className="flex items-center justify-between gap-5 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 transition-all duration-300"
                        >

                          <span className="font-semibold text-slate-800">
                            {param.label}
                          </span>

                          <span className="text-slate-600 text-right">
                            {param.value}
                          </span>

                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

              {/* ================= DIMENSIONS TABLE ================= */}

              <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

                {/* TABLE HEADER */}

                <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">

                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    Dimensions
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Precision dimensional specifications for CNC machining applications
                  </p>

                </div>

                {/* TABLE */}

                <div className="overflow-x-auto overflow-y-auto max-h-[500px]">

                  <table className="w-full border-collapse">

                    <thead className="sticky top-0 z-10">

                      <tr className="bg-slate-100 text-slate-700 text-sm">

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          Code No.
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          d1 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          d2 h6 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          d3 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          l1 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          l2 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          l3 (in)
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          Radius
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          Flutes
                        </th>

                        <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                          Shank Type
                        </th>

                      </tr>
                    </thead>

                    <tbody>

                      {selectedProduct.dimensions.map((dim, index) => (

                        <tr
                          key={index}
                          className="border-b border-slate-100 hover:bg-blue-50 transition-all duration-200"
                        >

                          <td className="px-5 py-4 font-semibold text-slate-800 whitespace-nowrap">
                            {dim.code}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.d1}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.d2h6}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.d3}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.l1}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.l2}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.l3}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.radius}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.flutes}
                          </td>

                          <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                            {dim.shankType}
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}