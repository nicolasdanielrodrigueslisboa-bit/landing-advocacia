import {
  Scale,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import "./Footer.css";

import Container from "../../ui/Container";
import { footer } from "../../../constants/footer";
import { contact } from "../../../constants/contact";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <a
              href="#hero"
              className="footer-logo"
              aria-label="Voltar ao início"
            >
              <span className="footer-logo-icon">
                <Scale />
              </span>

              <span className="footer-logo-name">
                {footer.brand}
              </span>
            </a>

            <p className="footer-description">
              {footer.description}
            </p>
          </div>

          <div className="footer-contact">
            <span className="footer-contact-title">
              Entre em contato
            </span>

            <div className="footer-contact-links">
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                <span className="footer-contact-icon">
                  <MessageCircle />
                </span>

                <span>
                  <small>WhatsApp</small>
                  {contact.whatsapp.label}
                </span>
              </a>

              <a
                href={contact.phone.href}
                className="footer-contact-link"
                aria-label="Ligar para o escritório"
              >
                <span className="footer-contact-icon">
                  <Phone />
                </span>

                <span>
                  <small>Telefone</small>
                  {contact.phone.label}
                </span>
              </a>

              <a
                href={contact.email.href}
                className="footer-contact-link footer-contact-link-email"
                aria-label="Enviar um e-mail"
              >
                <span className="footer-contact-icon">
                  <Mail />
                </span>

                <span>
                  <small>E-mail</small>
                  {contact.email.label}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footer.copyright}</p>

          <p className="footer-disclaimer">
            {footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;