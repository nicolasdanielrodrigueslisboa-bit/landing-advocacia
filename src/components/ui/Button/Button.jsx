import "./Button.css";

function Button({ children, onClick, href, variant = "primary" }) {
  if (href) {
    return (
      <a href={href} className={`button ${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;