import About from "@/components/About";
import Chat from "@/components/AI-Assistant";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Certifications/>
      <Footer />
      <Chat />
    </div>
  );
}
