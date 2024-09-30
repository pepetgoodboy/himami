import Navbar from "../UI/Molecules/Navbar";
import Footer from "../UI/Molecules/Footer";
import AOSWrapper from "../UI/Atoms/AOS/AOSWrapper";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <AOSWrapper>{children}</AOSWrapper>
      <Footer />
    </>
  );
}
