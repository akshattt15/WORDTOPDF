import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-extrabold">Word2PDF</h2>
          <p className="text-gray-300">
            Convert your Word documents to PDF instantly. Simple, fast, and reliable. Make your workflow smooth and hassle-free.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">Email: support@word2pdf.com</p>
          <p className="text-gray-300">Phone: +91 123 456 7890</p>
         <div className="flex space-x-4 mt-2">
  <a href="#" className="hover:text-gray-100 transition">
    <FaInstagram size={24} />
  </a>
  <a href="#" className="hover:text-gray-100 transition">
    <FaTwitter size={24} />
  </a>
  <a href="#" className="hover:text-gray-100 transition">
    <FaFacebookF size={24} />
  </a>
</div>
        </div>
      </div>

      <div className="bg-blue-300 text-gray-300 text-center py-4 mt-6 border-t border-blue-300">
        &copy; {new Date().getFullYear()} Word2PDF. All rights reserved.
      </div>
    </footer>
  );
}
