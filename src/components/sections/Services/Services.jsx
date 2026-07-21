import "./services.css";
import {
  Scale,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import FadeInSection from "../../ui/FadeInSection";
import { services } from "../../../constants/services";

const serviceIcons = [
  Scale,
  BriefcaseBusiness,
  ShieldCheck,
];

function Services() {
  return (
    <section id="services" className="services">
      <Container>
        <FadeInSection>
          <SectionTitle
            badge="Especialidades"
            title="Áreas de Atuação"
            subtitle="Atuação jurídica estratégica e personalizada para proteger seus direitos."
          />
        </FadeInSection>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Scale;

            return (
              <FadeInSection
                key={service.id}
                delay={index * 0.12}
                className="service-animation-wrapper"
              >
                <article className="service-card">
                  <div
                    className="service-card-icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>

                  <h3>{service.title}</h3>

                  <div
                    className="service-card-line"
                    aria-hidden="true"
                  />

                  <p>{service.description}</p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;