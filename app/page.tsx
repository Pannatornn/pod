import Header from "./components/Header";
import Banner from "./components/Banner";
import About, { Skills } from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">ข้ามไปยังเนื้อหา</a>
      <Header />
      <main id="main-content"><Banner /><About /><Projects /><Experience /><Skills /><Certificates /></main>
      <Footer /><Motion />
    </>
  );
}
