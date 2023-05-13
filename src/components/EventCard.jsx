import { Fragment } from "react";
import { Link } from "react-router-dom";

export function EventCard({ event }) {
  const { name, poster, prices, id } = event;

  return (
    <Fragment>
      <h3>{name}</h3>
      <img src={poster} alt={name} /> <br />
      <p>
        Price:
        {prices.map((price) => {
          return <span>{price}€ </span>;
        })}
      </p>
      <Link to={`/events/${id}`}>Details</Link>
    </Fragment>
  );
}
