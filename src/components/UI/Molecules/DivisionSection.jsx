import Division from "../Atoms/Division/Division";
import Pendidikan from "../../../assets/icons/pendidikan.png";
import Kominfo from "../../../assets/icons/kominfo.png";
import Sosbud from "../../../assets/icons/sosbud.png";

export default function DivisionSection() {
  return (
    <>
      <div className="pt-4 font-roboto">
        <div className="w-11/12 sm:w-4/6 md:w-11/12 lg:w-5/6 mx-auto py-12 flex flex-col">
          <div className="py-6">
            <div className="flex flex-col gap-4 text-center" data-aos="fade-up">
              <h3 className="text-4xl font-jakarta font-extrabold">
                Divisi Kami
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-roboto">
                Divisi di Himpunan Mahasiswa Manajemen Informatika Politeknik
                Praktisi
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 md:gap-1 md:grid md:grid-cols-2 lg:grid-cols-3 py-8"
            data-aos="fade-up"
          >
            <Division
              image={Pendidikan}
              name="Pendidikan"
              jobdesk="Divisi Pendidikan bertanggung jawab untuk mengurus aspek yang
                berkaitan dengan akademis mahasiswa Manajemen Informatika"
            />
            <Division
              image={Kominfo}
              name="Kominfo"
              jobdesk="Divisi Kominfo bertanggung jawab mengelola semua bentuk komunikasi dan informasi himpunan, termasuk website, media sosial, dan publikasi."
            />
            <Division
              image={Sosbud}
              name="Sosial Budaya & Kewirus"
              jobdesk="Divisi Sosbud & Kewirus bertanggung jawab membina hubungan antar anggota dan masyarakat luas melalui kegiatan sosial, budaya, dan pengembangan bisnis."
            />
          </div>
        </div>
      </div>
    </>
  );
}
