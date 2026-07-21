import "./SectionTitle.css";

function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="section-title">
      {badge && (
        <span className="section-title__badge">
          {badge}
        </span>
      )}

      <h2 className="section-title__heading">
        {title}
      </h2>

      {subtitle && (
        <p className="section-title__subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;