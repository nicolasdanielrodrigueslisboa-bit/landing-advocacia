import "./Card.css";

function Card({ title, description }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Card;