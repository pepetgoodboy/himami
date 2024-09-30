export default function Input({ type, id, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        required
        placeholder={placeholder}
        className="px-4 py-2 rounded-lg outline-none bg-white bg-opacity-80 placeholder:text-xs md:placeholder:text-sm text-gray-700"
      ></input>
    </>
  );
}
