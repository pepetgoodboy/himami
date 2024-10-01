import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

export default function StructureMember({
  image,
  alt,
  name,
  position,
  sizeImage,
  variant,
}) {
  return (
    <>
      <div
        className="flex flex-col w-11/12 md:w-5/6 mx-auto"
        data-aos="fade-up"
      >
        <div
          className="h-72 lg:h-96 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(./logo_himami.png)` }}
        >
          <div className="flex justify-center items-center">
            <ResponsiveImage
              src={image}
              alt={alt}
              loading="lazy"
              className={`${sizeImage}`}
            />
          </div>
        </div>
        <div
          className={`flex justify-center ${variant} rounded-3xl -mt-8 lg:-mt-0`}
        >
          <div className="py-4 flex flex-col text-center text-white font-fredoka font-semibold text-lg lg:text-2xl">
            <p className="tracking-wide">{name}</p>
            <p className="tracking-wide">{position}</p>
          </div>
        </div>
      </div>
    </>
  );
}
