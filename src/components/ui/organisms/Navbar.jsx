import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo_himami.png";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white font-roboto">
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-28">
            <div className="flex space-x-28">
              <div className="flex items-center gap-1">
                <img src={Logo} className="w-auto h-10" />
                <p className="font-medium text-xl font-right">HIMAMI 2025</p>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8 font-medium">
                <Link className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1">
                  Home
                </Link>
                <Link className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1">
                  Struktur
                </Link>
                <Link className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1">
                  Visi Misi
                </Link>
                <Link className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1">
                  Kegiatan
                </Link>
                <Link className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1">
                  Open Recruitment
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <button className="px-5 py-[10px] bg-[#FFD800] rounded-2xl font-medium">
                Get in Touch
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
