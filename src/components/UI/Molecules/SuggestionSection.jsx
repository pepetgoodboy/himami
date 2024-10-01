import ButtonSuggestion from "../Atoms/Button/ButtonSuggestion";
import TextareaSuggestion from "../Atoms/Textarea/TextareaSuggestion";
import SuggestionIcon from "../../../assets/icons/suggest.png";
import Swal from "sweetalert2";
import ResponsiveImage from "../Atoms/ResponsiveImage/ResponsiveImage";

export default function SuggestionSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/meojyzyn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Saran berhasil dikirim. Terima kasih.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan. Silahkan coba lagi.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <div className="pt-4 font-roboto">
        <div
          className="w-full sm:w-10/12 md:w-11/12 mx-auto bg-primary text-white sm:rounded-2xl"
          data-aos="fade-up"
        >
          <div className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-16 py-12 sm:py-14 flex gap-6">
            <div className="w-full xl:w-[65%] flex flex-col xl:justify-center gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-jakarta">
                  Kritik dan Saran
                </h4>
                <p className="text-lg sm:text-xl">
                  Punya kritik dan saran? Yuk langsung diisi ya...
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                id="suggestion"
                className="flex flex-col gap-4 md:flex-row"
              >
                <TextareaSuggestion
                  id="saran"
                  name="saran"
                  placeholder="Masukan Saranmu"
                />
                <ButtonSuggestion type="submit" name="Kirim" />
              </form>
            </div>
            <div className="hidden xl:w-[35%] xl:flex xl:justify-center xl:items-center">
              <ResponsiveImage
                src={SuggestionIcon}
                alt="suggestion"
                loading="lazy"
                className="w-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
