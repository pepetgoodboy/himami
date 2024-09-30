import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <>
      <div className="w-11/12 2xl:w-5/6 mx-auto">
        <div
          className="flex rounded-3xl bg-primary bg-center bg-cover bg-no-repeat bg-blend-screen justify-center items-center h-[80svh] lg:h-[110svh]"
          style={{
            backgroundImage: `url(./bg-himami.jpg)`,
          }}
        >
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col w-11/12 sm:w-5/6 mx-auto leading-tight text-center text-white font-extrabold font-jakarta text-4xl md:text-5xl lg:text-7xl -mt-0 md:-mt-20">
              <h2>HIMPUNAN MAHASISWA</h2>
              <Typewriter
                options={{
                  strings: ["MANAJEMEN INFORMATIKA"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex w-11/12 sm:w-4/6 md:w-3/6 lg:w-1/3 mx-auto justify-center text-white">
              <p className="text-center font-medium">
                <span className="font-bold">HIMAMI</span> Politeknik Praktisi
                adalah organisasi yang bersifat keprofesian di bidang
                informatika dan berdasarkan Tridharma Perguruan Tinggi yang
                berlandaskan Pancasila
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
