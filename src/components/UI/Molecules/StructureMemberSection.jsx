import Noval from "../../../assets/images/anggota/Noval.webp";
import Dika from "../../../assets/images/anggota/Dika.webp";
import Fauzi from "../../../assets/images/anggota/Fauzi.webp";
import Selly from "../../../assets/images/anggota/Selly.webp";
import Salma from "../../../assets/images/anggota/Salma.webp";
import Winda from "../../../assets/images/anggota/Winda.webp";
import Feri from "../../../assets/images/anggota/Feri.webp";
import Fahmi from "../../../assets/images/anggota/Fahmi.webp";
import Iqbal from "../../../assets/images/anggota/Iqbal.webp";
import Bimo from "../../../assets/images/anggota/Bimo.webp";
import Oca from "../../../assets/images/anggota/Oca.webp";
import Rafly from "../../../assets/images/anggota/Rafly.webp";
import Rifki from "../../../assets/images/anggota/Rifki.webp";
import Naila from "../../../assets/images/anggota/Naila.webp";
import Rahva from "../../../assets/images/anggota/Rahva.webp";
import Dimas from "../../../assets/images/anggota/Dimas.webp";
import Aulia from "../../../assets/images/anggota/Aulia.webp";
import StructureMember from "../Atoms/Member/StructureMember";

export default function StructureMemberSection() {
  return (
    <>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <StructureMember
          image={Noval}
          alt="Noval"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Noval Rizky Nugraha A"
          position="Ketua Umum Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Dika}
          alt="Dika"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Dika Wahyu Prayogo"
          position="Wakil Ketua Umum Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Feri}
          alt="Hendi"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Hendi"
          position="Sekretaris Umum 1 Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Fauzi}
          alt="Fauzi"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Fauzi Ahmad Simatupang"
          position="Sekretaris Umum 2 Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Selly}
          alt="Selly"
          sizeImage="h-[220px] lg:h-[300px] mt-5"
          name="Selly Rahma Ilahi"
          position="Bendahara Umum 1 Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Salma}
          alt="Salma"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-2 lg:mr-0"
          name="Salma Febryatha Zaniar"
          position="Bendahara Umum 2 Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Winda}
          alt="Winda"
          sizeImage="h-[210px] lg:h-[280px] mt-7 lg:mt-10"
          name="Winda Sukmawati"
          position="Ketua Divisi Pendidikan Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Feri}
          alt="Feri"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Feri Ahmad Arifin"
          position="Wakil Ketua Divisi Pendidikan Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Naila}
          alt="Naila"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-4 lg:mr-0"
          name="Na'ilah Salsabil Dalimunthe"
          position="Anggota Divisi Pendidikan Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Rahva}
          alt="Rahva"
          name="Rahva Amelia"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          position="Anggota Divisi Pendidikan Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Iqbal}
          alt="Iqbal"
          sizeImage="h-[240px] lg:h-[320px] -mt-0"
          name="Muhammad Iqbal Mudzaki"
          position="Ketua Divisi Kominfo Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Fahmi}
          alt="Fahmi"
          sizeImage="h-[200px] lg:h-[280px] mt-9 mr-4"
          name="Fahmi Syahwal Gumelar"
          position="Wakil Ketua Divisi Kominfo Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Dimas}
          alt="Dimas"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Dimas Nur"
          position="Anggota Divisi Kominfo Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Bimo}
          alt="Bimo"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Marconi Aryo Bimo"
          position="Anggota Divisi Kominfo Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Oca}
          alt="Oca"
          sizeImage="h-[240px] lg:h-[340px] -mt-1"
          name="Khansa Mujahidah"
          position="Ketua Divisi Sosbud Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Rafly}
          alt="Rafly"
          sizeImage="h-80 -mt-20 lg:-mt-40 lg:h-[480px]"
          name="Ahmad Rafly Harahap"
          position="Wakil Ketua Divisi Sosbud Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Rifki}
          alt="Rifki"
          name="Rifky Salim Lubis"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          position="Anggota Divisi Sosbud Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Aulia}
          alt="Aulia"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-6 lg:mr-4"
          name="Aulia Rizky Ananda S"
          position="Anggota Divisi Sosbud Himami"
          variant="bg-secondaryhover"
        />
      </div>
    </>
  );
}
