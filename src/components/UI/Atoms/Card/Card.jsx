import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

export default function Card({ image, alt, title, desc }) {
  return (
    <>
      <div
        className="flex flex-col gap-4 shadow-md rounded-2xl hover:border-[3px] hover:border-slate-200 hover:scale-110 transition-all duration-300"
        data-aos="zoom-in"
      >
        <ResponsiveImage
          src={image}
          alt={alt}
          loading="lazy"
          className="h-60 object-cover"
          variant="rounded-t-2xl"
        />
        <div className="flex flex-col gap-1 px-4 py-4">
          <h4 className="text-lg font-semibold font-jakarta">{title}</h4>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </>
  );
}
