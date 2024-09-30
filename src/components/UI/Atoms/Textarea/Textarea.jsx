export default function Textarea({ placeholder, id, name }) {
  return (
    <>
      <textarea
        id={id}
        name={name}
        rows={6}
        required
        placeholder={placeholder}
        className="px-4 py-2 rounded-lg bg-white bg-opacity-80 outline-none placeholder:text-xs md:placeholder:text-sm text-gray-700"
      />
    </>
  );
}
