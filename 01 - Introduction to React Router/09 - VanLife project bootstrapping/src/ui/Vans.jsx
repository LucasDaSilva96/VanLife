import { Link } from "react-router-dom";
import "../css/Vans.css";
import { useEffect, useState } from "react";

function Vans() {
  const [vansArray, setVansArray] = useState([]);
  useEffect(() => {
    async function getVans() {
      try {
        const res = await fetch("/api/vans");
        const data = await res.json();

        setVansArray(data.vans);
      } catch (err) {
        throw new Error(err.message);
      }
    }

    getVans();
  }, []);

  return (
    <section className="vans-main-container">
      <h1>Explore our van options</h1>
      <div className="van-type-container">
        <button>Simple</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <p>Clear filters</p>
      </div>

      <div className="vans-wrapper">
        {vansArray.length > 0 ? (
          vansArray.map((van) => (
            <Link
              to={`/vans/${van.id}`}
              className="van-detail-link"
              key={van.id}
              // This is for screen-readers ↓
              aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
            >
              <Van van={van} />
            </Link>
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No vans available</h1>
        )}
      </div>
    </section>
  );
}

export default Vans;

function Van({ van }) {
  return (
    <div className="van-box">
      <img src={van.imageUrl} alt={"van of type " + van.type} />

      <div className="van-name-price-box">
        <h2>{van.name}</h2>
        <div className="rent-price-box">
          <h3>${van.price}</h3>
          <span>/day</span>
        </div>
      </div>

      <span
        className="van-type-p"
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
      </span>
    </div>
  );
}
