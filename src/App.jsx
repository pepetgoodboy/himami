import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/UI/Atoms/ScrollToTop/ScrollToTop";
import Home from "./components/Pages/Home";
import Structure from "./components/Pages/Structure";
import Activity from "./components/Pages/Activity";
import Contact from "./components/Pages/Contact";
import OpenRec from "./components/Pages/OpenRec";
import VisionMision from "./components/Pages/VisionMision";
import NotFound from "./components/Pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visimisi" element={<VisionMision />} />
        <Route path="/struktur" element={<Structure />} />
        <Route path="/kegiatan" element={<Activity />} />
        <Route path="/oprec" element={<OpenRec />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
