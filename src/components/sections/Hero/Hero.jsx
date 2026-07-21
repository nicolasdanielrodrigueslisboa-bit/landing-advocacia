import "./Hero.css";
import advogada from "../../../assets/images/advogada.jpg.jpeg";
import { heroData } from "../../../constants/hero";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-photo-wrapper" aria-hidden="true">
        <div className="hero-photo-background">
          <img
            src={advogada}
            alt=""
            className="hero-photo"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <Container>
        <FadeInSection>
          <div className="hero-content">
            <span className="hero-tag">{heroData.badge}</span>

            <h1>
              {heroData.titleLine1}
              <br />
              {heroData.titleLine2}
              <br />
              {heroData.titleLine3}
            </h1>

            <p>{heroData.subtitle}</p>

            <Button href={heroData.buttonLink}>
              {heroData.buttonText}
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Hero;