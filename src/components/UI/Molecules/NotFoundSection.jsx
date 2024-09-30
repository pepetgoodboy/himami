import { Link } from "react-router-dom";
import ButtonOpenRec from "../Atoms/Button/ButtonOpenRec";

export default function NotFoundSection() {
  return (
    <>
      <div className="w-11/12 md:w-5/6 mx-auto h-[50svh] flex justify-center items-center">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-jakarta font-extrabold">
            Oops! Halaman tidak dapat ditemukan.
          </h2>
          <p className="text-gray-700 md:text-lg">
            Sepertinya tidak ditemukan apa pun di sini. Kembali ke beranda?
          </p>
          <Link to="/">
            <ButtonOpenRec type="button" name="Beranda" />
          </Link>
        </div>
      </div>
    </>
  );
}
