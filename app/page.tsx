import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Experience />
      <About />
      <Projects />
      <iframe src="https://www.bookclipy.com/book/D6MWXY12bqbSwDLBOdwco35VVNA2?theme=dark" width="100%" height="1000" style={{ border: "none" }}></iframe>
      <Footer />
    </main>
  );
}
