import React, { useState, Suspense } from "react";
import { Link, defer, Await } from "react-router-dom";
import "../../css/HostVans.css";
import { getHosVansAPI } from "../../api/fetchVans";

function hostVansLoader() {
  const vansData = getHosVansAPI();
  return defer({ vans: vansData });
}

function HostVans() {
  const { data } = hostVansLoader();
  const [vans, setVans] = useState(data);

  getHosVansAPI();

  return (
    <React.Fragment>
      <Suspense fallback={<h2 style={{ padding: "20px" }}>Loading...</h2>}>
        <Await errorElement={<Error />} resolve={data.vans}>
          {(vans) => renderHostVans(vans)}
        </Await>
      </Suspense>
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

export function renderHostVans(vans, host) {
  return (
    <div className="host-vans-container">
      <h1>Your listed vans</h1>
      {vans?.map((van) => {
        return (
          <Link to={host ? `vans/${van.id}` : `${van.id}`} key={van.id}>
            <Van title={van.name} imgUrl={van.imageUrl} price={van.price} />
          </Link>
        );
      })}
    </div>
  );
}
