import { Link } from "react-router-dom";

export default function LinkNavDesktop({ link, name }) {
  return (
    <>
      <Link
        to={link}
        className="border-transparent text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1"
      >
        {name}
      </Link>
    </>
  );
}
