import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="pt-8">
        <div className="mt-6 px-4 sm:px-16 py-16 bg-[#fafafa] font-roboto">
          <div className="flex flex-col gap-8 lg:gap-32 lg:grid lg:grid-cols-[3fr,1fr,1fr] lg:justify-between">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-medium font-jakarta">
                <span className="text-primary font-semibold">HIMAMI</span>{" "}
                Praktisi
              </h4>
              <p className="text-gray-700 text-justify">
                Himpunan Mahasiswa Manajemen Informatika Politeknik Praktisi
                adalah organisasi yang bersifat keprofesian di bidang
                informatika dan berdasarkan Tridharma Perguruan Tinggi yang
                berlandaskan Pancasila
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-medium font-jakarta">Divisi Kami</h4>
              <div className="flex flex-col gap-1">
                <p className="text-gray-700">Pendidikan</p>
                <p className="text-gray-700">Kominfo</p>
                <p className="text-gray-700">Sosial Budaya & Kewirausahaan</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-medium font-jakarta">Direct Link</h4>
              <div className="flex flex-col gap-1">
                <Link to="/" className="text-gray-700 hover:text-primary">
                  Beranda
                </Link>
                <Link
                  to="/visimisi"
                  className="text-gray-700 hover:text-primary"
                >
                  Visi Misi
                </Link>
                <Link
                  to="/struktur"
                  className="text-gray-700 hover:text-primary"
                >
                  Struktur
                </Link>
                <Link
                  to="/kegiatan"
                  className="text-gray-700 hover:text-primary"
                >
                  Kegiatan
                </Link>
                <Link to="/oprec" className="text-gray-700 hover:text-primary">
                  Open Recruitment
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-primary"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto bg-[#fafafa]">
          <div className="flex justify-center py-6 border border-t-gray-200">
            <p className="text-center text-gray-700 text-sm">
              Copyright &copy; HIMAMI POLITEKNIK PRAKTISI | KABINET
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
