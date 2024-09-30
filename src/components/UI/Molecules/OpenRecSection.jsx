import ButtonOpenRec from "../Atoms/Button/ButtonOpenRec";
import Input from "../Atoms/Input/Input";
import Textarea from "../Atoms/Textarea/Textarea";
import Swal from "sweetalert2";

export default function OpenRecSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xanwrbja", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Terima kasih telah mendaftar. Kami akan segera menghubungi anda.",
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
      <div className="w-11/12 2xl:w-5/6 mx-auto">
        <div
          className="flex flex-col rounded-3xl bg-primary bg-center bg-cover bg-no-repeat bg-blend-screen h-[80svh] lg:h-[110svh]"
          style={{ backgroundImage: `url(./bg-oprec.webp)` }}
        >
          <div
            className="flex flex-col gap-4 w-11/12 md:w-5/6 mx-auto py-8 md:py-16 lg:py-28"
            data-aos="fade-down"
          >
            <h4 className="text-4xl md:text-5xl font-extrabold font-jakarta text-center text-white">
              Open Recruitment
            </h4>
            <p className="text-center text-white lg:text-lg font-medium">
              Silahkan Isi Data Pendaftaran Disini
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            id="form"
            className="w-11/12 md:w-5/6 lg:w-4/6 mx-auto"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <Input type="text" id="npm" name="npm" placeholder="NPM" />
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nama Lengkap"
                />
              </div>
              <Textarea
                id="alasan"
                name="alasan"
                placeholder="Alasan Mendaftar"
              />
              <ButtonOpenRec type="submit" name="Kirim" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
