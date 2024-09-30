import Noval from "../../../assets/images/anggota/Noval2.png";

export default function VisionMisionSection() {
  return (
    <>
      <div className="w-11/12 md:w-5/6 mx-auto py-6 md:py-10 font-roboto">
        <div className="flex flex-col">
          <div
            className="flex flex-col gap-4 justify-center text-center md:mb-16 lg:mb-10"
            data-aos="fade-up"
          >
            <h4 className="text-4xl font-extrabold font-jakarta">Visi Misi</h4>
            <p className="text-gray-700 text-lg md:text-xl">
              Visi Misi Himpunan Mahasiswa Manajemen Informatika Politeknik
              Praktisi
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div
              className="w-11/12 lg:w-[40%] h-80 md:h-96 lg:h-96 mx-auto bg-logoHimami bg-center bg-contain bg-no-repeat"
              data-aos="fade-right"
            >
              <div className="flex justify-center items-center">
                <img
                  src={Noval}
                  className="h-72 md:h-[400px] lg:h-[370px] mr-4 md:mr-6 lg:mr-7 -mt-5 md:-mt-20 lg:-mt-12"
                />
              </div>
            </div>
            <div className="w-11/12 lg:w-[60%] mx-auto flex flex-col gap-5">
              <div className="flex flex-col gap-1 text-lg" data-aos="fade-left">
                <h6 className="text-xl text-primary font-jakarta font-bold">
                  Visi :
                </h6>
                <p className="text-gray-700 text-justify">
                  Menjadi himpunan mahasiswa yang unggul dan inovatif dalam
                  bidang Manajemen Informatika, serta siap bersaing di era
                  digital.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-lg" data-aos="fade-left">
                <h6 className="text-xl text-primary font-jakarta font-bold">
                  Misi :
                </h6>
                <p className="text-gray-700 text-justify">
                  1. Meningkatkan keterampilan teknis mahasiswa melalui kegiatan
                  edukasi.
                </p>
                <p className="text-gray-700 text-justify">
                  2. Mendorong inovasi dan kreativitas mahasiswa dalam
                  pengembangan teknologi informasi.
                </p>
                <p className="text-gray-700 text-justify">
                  3. Memperkuat jaringan dengan alumni untuk membuka peluang
                  karier.
                </p>
                <p className="text-gray-700 text-justify">
                  4. Mendukung partisipasi mahasiswa dalam kompetisi atau
                  kegiatan teknologi tingkat nasional dan internasional.
                </p>
              </div>
              <div className="font-roboto text-gray-700" data-aos="fade-left">
                <p>
                  <span className="text-primary font-jakarta font-semibold text-justify">
                    Noval Rizky{" "}
                  </span>
                  | Ketua Himpunan Mahasiswa Manajemen Informatika Periode 2023
                  - 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
