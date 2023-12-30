import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../css/HostVans.css";

function HostVans() {
  const [vans, setVans] = useState([]);

  const data = useLoaderData();
  useEffect(() => {
    setVans(data);
  }, []);

  return (
    <React.Fragment>
      {vans && (
        <div className="host-vans-container">
          <h1>Your listed vans</h1>
          {vans.map((van) => {
            return (
              <Link to={`${van.id}`} key={van.id}>
                <Van title={van.name} imgUrl={van.imageUrl} price={van.price} />
              </Link>
            );
          })}
        </div>
      )}
      {!vans && <h1>Loading...</h1>}
    </React.Fragment>
  );
}

export default HostVans;

function Van({ title, imgUrl, price }) {
  return (
    <article className="host-van-box">
      <img src={imgUrl} alt={title} />

      <div>
        <h2>{title}</h2>
        <span>${price}/day</span>
      </div>
    </article>
  );
}
