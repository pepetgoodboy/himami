export default function TextareaSuggestion({ placeholder, id, name }) {
  return (
    <>
      <textarea
        rows={1}
        id={id}
        name={name}
        required
        className="w-full px-4 py-5 rounded-lg outline-none text-gray-700 text-lg"
        placeholder={placeholder}
      />
    </>
  );
}
