import { Link } from "react-router-dom";

export default function Button({ link, name, variant }) {
  return (
    <>
      <Link to={link}>
        <button
          type="button"
          className={`px-5 py-[10px] bg-[#FFD800] hover:bg-[#ffc400] ${variant} rounded-2xl font-medium`}
        >
          {name}
        </button>
      </Link>
    </>
  );
}
