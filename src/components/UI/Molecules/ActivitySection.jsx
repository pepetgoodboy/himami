import ITC from "../../../assets/images/kegiatan/itc1.webp";
import Gathering from "../../../assets/images/kegiatan/mini_gathering1.webp";
import Rotr from "../../../assets/images/kegiatan/rotr2.webp";
import DevFest from "../../../assets/images/kegiatan/devfest3.webp";
import Card from "../Atoms/Card/Card";

export default function ActivitySection() {
  return (
    <>
      <div className="font-roboto">
        <div className="w-11/12 sm:w-4/6 md:w-11/12 lg:w-5/6 mx-auto py-8 flex flex-col">
          <div className="py-6">
            <div className="flex flex-col gap-4 text-center" data-aos="fade-up">
              <h3 className="text-4xl font-jakarta font-extrabold">
                Program Kerja Kami
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-roboto">
                Program Kerja di Himpunan Mahasiswa Manajemen Informatika
                Politeknik Praktisi
              </p>
            </div>
          </div>
          <div className="px-2 md:px-0 flex flex-col gap-12 md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 py-8">
            <Card
              image={ITC}
              alt="ITC"
              title="IT Club"
              desc="Berbagi pengetahuan terkait mata kuliah yang nantinya akan dipelajari dan pengetahuan seputar teknologi informasi."
            />
            <Card
              image={DevFest}
              alt="DevFest"
              title="Devcember Fest"
              desc="Menjadi tuan rumah pada event Devcember yang diadakan oleh alkademi.idn dan smkcoding.id"
            />
            <Card
              image={Gathering}
              alt="Gathering"
              title="Mini Gathering"
              desc="Berkumpul bersama seluruh mahasiswa dan dosen Manajemen Informatika Politeknik Praktisi untuk mempererat tali silaturahmi antar anggota."
            />
            <Card
              image={Rotr}
              alt="Rotr"
              title="Ramadhan On The Road"
              desc="Kegiatan sosial yang dilakukan selama bulan Ramadhan, seperti berbagi takjil kepada masyarakat dan melakukan buka puasa bersama."
            />
          </div>
        </div>
      </div>
    </>
  );
}
