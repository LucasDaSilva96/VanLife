import { Link, useSearchParams, NavLink } from "react-router-dom";
import "../css/Vans.css";
import { useEffect, useState } from "react";
import { getVans } from "../api/fetchVans";

function Vans() {
  const [vansArray, setVansArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadVans() {
      setIsLoading(true);
      try {
        const data = await getVans();

        setVansArray(data.vans);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadVans();
  }, []);

  const typeFilter = searchParams.get("type");
  const displayArray = typeFilter
    ? vansArray.filter((el) => el.type === typeFilter)
    : vansArray;

  console.log(error);
  if (error) {
    return <h1 aria-live="assertive">There was an error </h1>;
  }
  return (
    <section className="vans-main-container">
      <h1>Explore our van options</h1>
      <div className="van-type-container">
        <NavLink
          to="?type=simple"
          style={{
            backgroundColor: typeFilter === "simple" ? "#e17654" : "",
            color: typeFilter === "simple" ? "#f5f5f5" : "",
          }}
        >
          Simple
        </NavLink>
        <NavLink
          to="?type=luxury"
          style={{
            backgroundColor: typeFilter === "luxury" ? "#161616" : "",
            color: typeFilter === "luxury" ? "#f5f5f5" : "",
          }}
        >
          Luxury
        </NavLink>
        <NavLink
          to="?type=rugged"
          style={{
            backgroundColor: typeFilter === "rugged" ? "#115e59" : "",
            color: typeFilter === "rugged" ? "#f5f5f5" : "",
          }}
        >
          Rugged
        </NavLink>
        <NavLink to="." style={{ display: typeFilter ? "block" : "none" }}>
          Clear filters
        </NavLink>
        {/*  <button onClick={() => setSearchParams({ type: "simple" })}>
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })}>
          Luxury
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })}>
          Rugged
        </button>
      <button onClick={() => setSearchParams({})}>Clear filter</button> */}
      </div>

      {loading && <h1 aria-live="polite">Loading...</h1>}

      <div className="vans-wrapper">
        {displayArray.length > 0
          ? displayArray.map((van) => (
              <Link
                to={`${van.id}`}
                state={{ search: searchParams.toString() }}
                className="van-detail-link"
                key={van.id}
                // This is for screen-readers ↓
                aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
              >
                <Van van={van} />
              </Link>
            ))
          : null}
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
