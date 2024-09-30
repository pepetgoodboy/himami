import StructureMemberSection from "./StructureMemberSection";

export default function StructureSection() {
  return (
    <>
      <div className="w-11/12 md:w-5/6 mx-auto py-6 md:py-10">
        <div className="flex flex-col gap-8">
          <h3
            className="text-4xl uppercase text-center font-jakarta font-extrabold underline"
            data-aos="fade-up"
          >
            <span className="text-primary tracking-wider md:tracking-wide">
              Struktur
            </span>{" "}
            <span className="text-secondaryhover tracking-wider md:tracking-wide underline">
              Organisasi
            </span>
          </h3>
          <StructureMemberSection />
        </div>
      </div>
    </>
  );
}
