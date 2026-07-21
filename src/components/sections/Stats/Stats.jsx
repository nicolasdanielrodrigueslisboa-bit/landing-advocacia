import "./Stats.css";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";
import { stats } from "../../../constants/stats";

function Stats() {
  return (
    <section className="stats" aria-label="Resultados do escritório">
      <Container>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <FadeInSection
              key={stat.id}
              delay={index * 0.1}
              y={30}
              className="stat-animation-wrapper"
            >
              <article className="stat-item">
                <strong className="stat-number">
                  {stat.number}
                </strong>

                <span className="stat-line" aria-hidden="true" />

                <p className="stat-label">
                  {stat.label}
                </p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;