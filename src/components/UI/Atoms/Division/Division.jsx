export default function Division({ image, name, jobdesk }) {
  return (
    <>
      <div className="sm:w-5/6 mx-auto flex flex-col gap-2 py-4 px-2 md:px-4 hover:bg-purple-200 rounded-xl transition-all duration-700">
        <img src={image} className="w-16 mx-auto md:mx-0" />
        <p className="font-jakarta text-center md:text-start text-lg font-semibold mt-4">
          {name}
        </p>
        <p className="text-gray-700 text-center md:text-start">{jobdesk}</p>
      </div>
    </>
  );
}
