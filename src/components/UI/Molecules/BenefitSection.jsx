import ITC from "../../../assets/images/kegiatan/itc2.jpg";
import Gathering from "../../../assets/images/kegiatan/devfest1.jpg";
import Rotr from "../../../assets/images/kegiatan/rotr1.jpeg";
import Card from "../Atoms/Card/Card";

export default function BenefitSection() {
  return (
    <>
      <div className="font-roboto">
        <div className="w-11/12 sm:w-4/6 md:w-11/12 lg:w-5/6 mx-auto py-8 flex flex-col">
          <div className="py-6">
            <div className="flex flex-col gap-4 text-center" data-aos="fade-up">
              <h3 className="text-4xl font-jakarta font-extrabold">
                Mengapa <span className="text-primary">HIMAMI?</span>
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-roboto">
                Manfaat bergabung di Himpunan Mahasiswa Manajemen Informatika
                Politeknik Praktisi
              </p>
            </div>
          </div>
          <div
            className="px-2 md:px-0 flex flex-col gap-12 md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 py-8"
            data-aos="zoom-in"
          >
            <Card
              image={ITC}
              title="Pengembangan Soft Skills"
              desc="Mendapatkan pengetahuan dan keterampilan terkini di bidang
                  teknologi informasi."
            />
            <Card
              image={Gathering}
              title="Networking yang Luas"
              desc="Membangun relasi dengan dosen, alumni, dan praktisi di bidang
                  IT."
            />
            <Card
              image={Rotr}
              title="Kontribusi untuk Masyarakat"
              desc="Berpartisipasi dalam kegiatan sosial yang bermanfaat bagi
                  masyarakat."
            />
          </div>
        </div>
      </div>
    </>
  );
}
