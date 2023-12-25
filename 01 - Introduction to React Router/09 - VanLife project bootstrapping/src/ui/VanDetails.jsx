import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/VanDetails.css";

function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    async function getVan() {
      try {
        const res = await fetch(`/api/vans/${params.id}`);

        const data = await res.json();

        setVan(data.vans);
      } catch (err) {
        throw new Error(err.message);
      }
    }

    getVan();
  }, [van]);

  return (
    <section className="van-details-wrapper">
      <Link to="/vans" className="van-detail-back-link">
        ← Back to all vans
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

          <Link to="">Rent this van</Link>
        </div>
      )}
    </section>
  );
}

export default VanDetails;
