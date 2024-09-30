export default function ButtonSuggestion({ type, name }) {
  return (
    <>
      <button
        type={type}
        className="w-40 px-4 py-2 bg-[#3116aa] hover:bg-[#35228d] rounded-lg text-white font-medium"
      >
        {name}
      </button>
    </>
  );
}
