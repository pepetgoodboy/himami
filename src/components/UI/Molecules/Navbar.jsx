import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo_himami.webp";
import LogoPraktisi from "../../../assets/logo/logo_praktisi.webp";
import ResponsiveImage from "../Atoms/ResponsiveImage/ResponsiveImage";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import Button from "../Atoms/Button/Button";
import LinkNavDesktop from "../Atoms/Link/LinkNavDesktop";
import LinkNavMobile from "../Atoms/Link/LinkNavMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white font-jakarta">
        <nav className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between h-28">
            <div className="flex space-x-28">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1">
                  <ResponsiveImage
                    src={Logo}
                    alt="logo_himami"
                    className="w-auto h-8 md:h-10"
                  />
                  <ResponsiveImage
                    src={LogoPraktisi}
                    alt="logo_praktisi"
                    className="w-auto h-6 md:h-8"
                  />
                </div>
                <div>
                  <p className="ml-1 text-[10px] md:text-xs font-jakarta font-semibold text-gray-900 text-center">
                    HIMAMI 2025
                  </p>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8 font-medium">
                <LinkNavDesktop link="/" name="Beranda" />
                <LinkNavDesktop link="/visimisi" name="Visi Misi" />
                <LinkNavDesktop link="/struktur" name="Struktur" />
                <LinkNavDesktop link="/kegiatan" name="Kegiatan" />
                <LinkNavDesktop link="/oprec" name="Open Recruitment" />
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <Button
                link="/contact"
                name="Hubungi Kami"
                variant="text-white font-semibold"
              />
            </div>
            {/* Button Menu */}
            <div
              onClick={toggleMenu}
              className="flex lg:hidden justify-center items-center cursor-pointer"
            >
              <CgMenu className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-black transform ${
            isOpen ? "translate-y-0 opacity-90" : "-translate-y-full opacity-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="absolute top-0 right-0 p-8 md:p-10">
            <IoClose
              onClick={toggleMenu}
              className="w-6 h-6 text-gray-300 hover:cursor-pointer hover:rotate-90 hover:text-[#FFD800] transition duration-300 ease-in"
            />
          </div>
          <div className="flex flex-col justify-center h-screen items-center gap-14">
            <h3 className="text-lg text-gray-700">HIMAMI</h3>
            <div className="flex flex-col justify-center items-center gap-7 font-jakarta text-3xl font-medium font-2xl">
              <LinkNavMobile link="/" name="Beranda" />
              <LinkNavMobile link="/visimisi" name="Visi Misi" />
              <LinkNavMobile link="/struktur" name="Struktur" />
              <LinkNavMobile link="/kegiatan" name="Kegiatan" />
              <LinkNavMobile link="/oprec" name="Open Recruitment" />
            </div>
            <div className="flex flex-col gap-10">
              <Button
                link="/contact"
                name="Hubungi Kami"
                variant="text-white font-semibold"
              />
              <Link
                to="https://www.instagram.com/himami_praktisi"
                target="_blank"
                aria-label="instagram"
                className="w-10 mx-auto p-1 rounded-full border border-gray-700"
              >
                <AiFillInstagram className="w-7 h-7 ml-[1px] text-gray-700 hover:text-[#FFD800] transition duration-300 ease-in" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
