import { useState } from "react";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import "../css/VanDetails.css";

function VanDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const data = useLoaderData();
  const [van, setVan] = useState(data.find((van) => van.id === id));

  return (
    <section className="van-details-wrapper">
      <Link
        to={state.search ? `..?${state.search}` : ".."}
        relative="path"
        className="van-detail-back-link"
      >
        ← Back to {state.search ? `${state.search}`.split("=")[1] : "all"} vans
      </Link>

      {van && (
        <div className="van-details-container">
          <img src={van.imageUrl} alt={van.name} />

          <p
            className="van-type-detail-p"
            style={{
              backgroundColor: `${
                van.type === "simple"
                  ? "#E17654"
                  : van.type === "rugged"
                  ? "#115E59"
                  : "#161616"
              }`,
            }}
          >
            {van.type}
          </p>

          <h1>{van.name}</h1>

          <p>
            <strong>${van.price}</strong>/day
          </p>

          <p>{van.description}</p>
          {/* ↓ TODO ↓ */}
          <Link to="*">Rent this van</Link>
        </div>
      )}
    </section>
  );
}

export default VanDetails;
