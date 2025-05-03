import { useEffect, useState } from 'react';
import { FaSearch, FaThLarge, FaList } from 'react-icons/fa';
import { products, materialFilters, numericFilters } from '../data/products';
import Modal from '../components/Modal'; // Import Modal component
import { Product } from '../types/product';

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterProducts, setFilterProducts] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);  // Selected product

  useEffect(() => {
    setFilterProducts(products.filter(value => value.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())));
  }, [searchQuery]);

  // Function to open the modal with the selected product
  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-100 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search endmills, cutting tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 w-[90]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6 rounded-button">
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button className="text-primary text-sm hover:text-blue-700">Clear All</button>
            </div>

            {/* Material Filters */}
            <div className="space-y-4">
              <h3 className="font-medium">Material to Machine</h3>
              {materialFilters.map((filter) => (
                <div key={filter.id} className='flex items-center gap-3'>
                  <input type='checkbox' id={filter.id} className='rounded border-gray-300'></input>
                  <div className='flex gap-3'>
                    <div className={`${filter.color} flex items-center justify-center rounded-lg p-4`}>
                      <span className='text-white'>{filter.id[0].toUpperCase()}</span>
                    </div>
                    <div className=''>
                      <label htmlFor={filter.id}>
                        <span>{filter.name}</span>
                        <span className='block text-gray-400'>{filter.count} item(s)</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Numeric Filters */}
            {numericFilters.map((filter) => (
              <div key={filter.name} className="space-y-2">
                <h3 className="font-medium text-sm">{filter.name}</h3>
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="flex-1 productListing">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">{filterProducts.length} Products</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-button rounded ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-button rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  >
                    <FaList />
                  </button>
                </div>
                <select className="input-style">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {filterProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover ${viewMode === 'list' ? 'w-48 h-48' : 'w-full h-48'}`}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">SKU: {product.sku}</p>
                    <div className="space-y-1 mb-4">
                      <div className="flex gap-4 text-sm">
                        <span>{product.specs.flutes} Flute</span>
                        <span>{product.specs.diameter}mm</span>
                        <span>{product.specs.material}</span>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <button
                        className='bg-blue-600 px-6 py-2 rounded-md text-white'
                        onClick={() => openModal(product)} // Open modal on click
                      >
                        View →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <>
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <div className="flex gap-2 mb-4">
              {/* {selectedProduct.materialBadges.map((badge) => (
                <span
                  key={badge.letter}
                  className={`${badge.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {badge.letter}
                </span>
              ))} */}
            </div>
            <div className="space-y-2 text-gray-600 mb-4">
              {/* <p>Series: {selectedProduct.series} - Code: {selectedProduct.code}</p> */}
              {/* <p>EDP: {selectedProduct.edp}</p> */}
              <p>SKU: {selectedProduct.sku}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1">
                <img
                  src={`${import.meta.env.BASE_URL}/ProductDescription/product1.png`}
                  alt="Product Technical Drawing"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">Technical Parameters</h2>
              <div className="space-y-4">
                {/* <h3 className="font-semibold text-lg">Technical Parameters</h3> */}
                {selectedProduct.technicalParameter.map((param, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <span className="font-medium">{param.label}: </span>
                      <span className="text-gray-600">{param.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
           

            {/* Dimensions Table */}
            <h3 className="font-semibold text-lg mt-4">Dimensions</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border px-4 py-2 text-left">Code No.</th>
                    <th className="border px-4 py-2 text-left">d1 (in)</th>
                    <th className="border px-4 py-2 text-left">d2 h6 (in)</th>
                    <th className="border px-4 py-2 text-left">d3 (in)</th>
                    <th className="border px-4 py-2 text-left">l1 (in)</th>
                    <th className="border px-4 py-2 text-left">l2 (in)</th>
                    <th className="border px-4 py-2 text-left">l3 (in)</th>
                    <th className="border px-4 py-2 text-left">Radius (in)</th>
                    <th className="border px-4 py-2 text-left">Flutes</th>
                    <th className="border px-4 py-2 text-left">Shank Type</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.dimensions.map((dim, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{dim.code}</td>
                      <td className="border px-4 py-2">{dim.d1}</td>
                      <td className="border px-4 py-2">{dim.d2h6}</td>
                      <td className="border px-4 py-2">{dim.d3}</td>
                      <td className="border px-4 py-2">{dim.l1}</td>
                      <td className="border px-4 py-2">{dim.l2}</td>
                      <td className="border px-4 py-2">{dim.l3}</td>
                      <td className="border px-4 py-2">{dim.radius}</td>
                      <td className="border px-4 py-2">{dim.flutes}</td>
                      <td className="border px-4 py-2">{dim.shankType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
