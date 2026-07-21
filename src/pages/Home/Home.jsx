import Header from "../../components/sections/Header";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Services from "../../components/sections/Services";
import Stats from "../../components/sections/Stats";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;