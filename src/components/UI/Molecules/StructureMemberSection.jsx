import Noval from "../../../assets/images/anggota/Noval.png";
import Dika from "../../../assets/images/anggota/Dika.png";
import Fauzi from "../../../assets/images/anggota/Fauzi.png";
import Selly from "../../../assets/images/anggota/Selly.png";
import Salma from "../../../assets/images/anggota/Salma.png";
import Winda from "../../../assets/images/anggota/Winda.png";
import Feri from "../../../assets/images/anggota/Feri.png";
import Fahmi from "../../../assets/images/anggota/Fahmi.png";
import Iqbal from "../../../assets/images/anggota/Iqbal.png";
import Bimo from "../../../assets/images/anggota/Bimo.png";
import Oca from "../../../assets/images/anggota/Oca.png";
import Rafly from "../../../assets/images/anggota/Rafly.png";
import Rifki from "../../../assets/images/anggota/Rifki.png";
import Naila from "../../../assets/images/anggota/Naila.png";
import Rahva from "../../../assets/images/anggota/Rahva.png";
import Dimas from "../../../assets/images/anggota/Dimas.png";
import Aulia from "../../../assets/images/anggota/Aulia.png";
import StructureMember from "../Atoms/Member/StructureMember";

export default function StructureMemberSection() {
  return (
    <>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <StructureMember
          image={Noval}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Noval Rizky Nugraha A"
          position="Ketua Umum Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Dika}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Dika Wahyu Prayogo"
          position="Wakil Ketua Umum Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Feri}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Hendi"
          position="Sekretaris Umum 1 Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Fauzi}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Fauzi Ahmad Simatupang"
          position="Sekretaris Umum 2 Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Selly}
          sizeImage="h-[260px] lg:h-[340px] -mt-6"
          name="Selly Rahma Ilahi"
          position="Bendahara Umum 1 Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Salma}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-2 lg:mr-0"
          name="Salma Febryatha Zaniar"
          position="Bendahara Umum 2 Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Winda}
          sizeImage="h-[230px] lg:h-[300px] mt-2 lg:mt-4"
          name="Winda Sukmawati"
          position="Ketua Divisi Pendidikan Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Feri}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Feri Ahmad Arifin"
          position="Wakil Ketua Divisi Pendidikan Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Naila}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-4 lg:mr-0"
          name="Na'ilah Salsabil Dalimunthe"
          position="Anggota Divisi Pendidikan Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Rahva}
          name="Rahva Amelia"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          position="Anggota Divisi Pendidikan Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Iqbal}
          sizeImage="h-[240px] lg:h-[320px] -mt-0"
          name="Muhammad Iqbal Mudzaki"
          position="Ketua Divisi Kominfo Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Fahmi}
          sizeImage="h-[240px] lg:h-[320px] -mt-0 mr-4"
          name="Fahmi Syahwal Gumelar"
          position="Wakil Ketua Divisi Kominfo Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Dimas}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Dimas Nur"
          position="Anggota Divisi Kominfo Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Bimo}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          name="Marconi Aryo Bimo"
          position="Anggota Divisi Kominfo Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Oca}
          sizeImage="h-[260px] lg:h-[340px] -mt-6"
          name="Khansa Mujahidah"
          position="Ketua Divisi Sosbud Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Rafly}
          sizeImage="h-80 -mt-20 lg:-mt-40 lg:h-[480px]"
          name="Ahmad Rafly Harahap"
          position="Wakil Ketua Divisi Sosbud Himami"
          variant="bg-secondaryhover"
        />
        <StructureMember
          image={Rifki}
          name="Rifky Salim Lubis"
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11"
          position="Anggota Divisi Sosbud Himami"
          variant="bg-tertiary"
        />
        <StructureMember
          image={Aulia}
          sizeImage="h-[260px] lg:h-[360px] -mt-6 lg:-mt-11 mr-6 lg:mr-4"
          name="Aulia Rizky Ananda S"
          position="Anggota Divisi Sosbud Himami"
          variant="bg-secondaryhover"
        />
      </div>
    </>
  );
}
