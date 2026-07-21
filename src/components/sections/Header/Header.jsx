import { useEffect, useRef, useState } from "react";
import { Scale } from "lucide-react";
import "./header.css";
import Container from "../../ui/Container";
import MenuButton from "../../ui/MenuButton";
import { navigation } from "../../../constants/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const headerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);

      const sections = navigation
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionStart = section.offsetTop;
        const sectionEnd =
          section.offsetTop + section.offsetHeight;

        if (
          scrollPosition >= sectionStart &&
          scrollPosition < sectionEnd
        ) {
          setActiveSection(section.id);
        }
      });
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className={`header ${
        isScrolled ? "header--scrolled" : ""
      }`}
    >
      <Container>
        <div className="header-content">
          <a
            href="#hero"
            className="logo"
            onClick={closeMenu}
            aria-label="Ir para o início"
          >
            <span className="logo-icon" aria-hidden="true">
              <Scale />
            </span>

            <span className="logo-name">
              Helena Martins
            </span>
          </a>

          <MenuButton
            isOpen={isMenuOpen}
            onClick={toggleMenu}
          />

          <nav
            className={`navigation ${
              isMenuOpen ? "open" : ""
            }`}
            aria-label="Navegação principal"
          >
            <ul className="nav-list">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");

                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={
                        activeSection === sectionId
                          ? "active"
                          : ""
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;