import Navbar from "../ui/organisms/Navbar";
import BGHimami from "../../assets/images/bg-himami1.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-2 relative">
        <img src={BGHimami} className="w-full rounded-3xl" />
        <div className="absolute top-1/2 ">
          <div className="flex justify-center items-center text-center">
            <h2 className="text-white">
              HIMPUNAN MAHASISWA MANAJEMEN INFORMATIKA
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
