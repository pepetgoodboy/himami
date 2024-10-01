import { Link } from "react-router-dom";

export default function Button({ link, name, variant }) {
  return (
    <>
      <Link to={link}>
        <button
          type="button"
          className={`px-5 py-[10px] bg-secondaryhover hover:bg-[#ffae00] ${variant} rounded-2xl`}
        >
          {name}
        </button>
      </Link>
    </>
  );
}
