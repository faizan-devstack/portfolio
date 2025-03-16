import About from "@/components/sections/About";
import Chat from "@/components/sections/AI-Assistant";
import Certifications from "@/components/sections/Certifications";
import Footer from "@/components/sections/Footer";
import Introduction from "@/components/sections/Introduction";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

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
