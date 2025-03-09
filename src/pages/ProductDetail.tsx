import { useParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { technicalParameters, dimensions, materialBadges } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-primary">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/products" className="text-gray-600 hover:text-primary">Products</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">1/2 RF 100 DIVER CARBIDE end mill Signum</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Product Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-4">1/2 RF 100 DIVER CARBIDE end mill Signum (nano-Si)</h1>
              
              <div className="flex gap-2 mb-4">
                {materialBadges.map((badge) => (
                  <span
                    key={badge.letter}
                    className={`${badge.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold`}
                  >
                    {badge.letter}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-gray-600">
                <p>Series: 6757 - Code: 12.7</p>
                <p>EDP: 906757012700</p>
                <p>{id}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-500 font-semibold">50+ available</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition">
                <FaDownload />
                Download PDF
              </button>
            </div>
          </div>

          {/* Product Image and Technical Parameters */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80"
                alt="Product Technical Drawing"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">Technical Parameters</h2>
              <div className="space-y-4">
                {technicalParameters.map((param, index) => (
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
          <div>
            <h2 className="text-xl font-semibold mb-4">Dimensions</h2>
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
                  {dimensions.map((dim, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}