import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import {ContactInfos} from "../data/about"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CadgeTools</h3>
            <p className="text-gray-400">
              Leading manufacturer of precision endmills and cutting tools for industrial applications.
              <br></br>
              Precision Engineered for Peak Performance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">{ContactInfos.address}</p>
            <p className="text-gray-400">{ContactInfos.email}</p>
            <p className="text-gray-400">+91 {ContactInfos.phone}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 CadgeTools. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}