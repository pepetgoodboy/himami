export default function CardContact({ image, title, field }) {
  return (
    <>
      <div
        className="flex flex-col gap-4 px-2 lg:px-4 py-4 lg:py-8 bg-white bg-opacity-70 rounded-xl border border-gray-400"
        data-aos="fade-up"
      >
        <img src={image} className="w-7 lg:w-10" />
        <div className="flex flex-col gap-2">
          <p className="font-jakarta text-sm lg:text-lg font-semibold">
            {title}
          </p>
          <p className="text-xs lg:text-sm">{field}</p>
        </div>
      </div>
    </>
  );
}
