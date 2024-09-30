import CardContact from "../Atoms/Card/CardContact";
import Email from "../../../assets/icons/email.png";
import Call from "../../../assets/icons/call.png";
import Instagram from "../../../assets/icons/instagram.png";

export default function ContactSection() {
  return (
    <>
      <div className="w-11/12 2xl:w-5/6 mx-auto">
        <div
          className="flex flex-col rounded-3xl bg-primary bg-center bg-cover bg-no-repeat bg-blend-screen h-[80svh] lg:h-[110svh]"
          style={{ backgroundImage: `url(./bg-contact.jpg)` }}
        >
          <div
            className="flex flex-col gap-4 w-11/12 md:w-5/6 mx-auto py-8 md:py-16 lg:py-28"
            data-aos="fade-down"
          >
            <h4 className="text-4xl md:text-5xl font-extrabold font-jakarta text-center text-white">
              Hubungi Kami
            </h4>
            <p className="text-center text-white lg:text-lg font-medium">
              Anda Bisa Menghubungi Kami Melalui
            </p>
          </div>
          <div className="w-11/12 mx-auto py-2 md:py-6 lg:py-10 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 text-gray-700">
            <CardContact
              image={Email}
              title="Email"
              field="himamipraktisi25@gmail.com"
            />
            <CardContact
              image={Instagram}
              title="Instagram"
              field="@himami_praktisi"
            />
            <CardContact
              image={Call}
              title="Telp & Whatsapp"
              field="0813-9643-6609"
            />
          </div>
        </div>
      </div>
    </>
  );
}
