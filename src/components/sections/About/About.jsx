import "./about.css";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import FadeInSection from "../../ui/FadeInSection";

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <FadeInSection>
          <SectionTitle
            badge="Sobre"
            title="Sobre a Advogada"
            subtitle="Com anos de experiência na advocacia, oferecemos atendimento personalizado, ética profissional e dedicação total à defesa dos direitos dos clientes."
          />
        </FadeInSection>
      </Container>
    </section>
  );
}

export default About;