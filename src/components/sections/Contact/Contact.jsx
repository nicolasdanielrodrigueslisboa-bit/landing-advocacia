import "./contact.css";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import FadeInSection from "../../ui/FadeInSection";
import { contact } from "../../../constants/contact";

function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <FadeInSection>
          <SectionTitle
            badge={contact.badge}
            title={contact.title}
            subtitle={contact.subtitle}
          />

          <div className="contact-action">
            <Button href={contact.buttonLink}>
              {contact.buttonText}
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Contact;