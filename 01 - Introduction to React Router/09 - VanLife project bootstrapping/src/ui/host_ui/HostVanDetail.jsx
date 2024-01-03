import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import "../../css/HostVanDetail.css";

function HostVanDetail() {
  const { id } = useParams();
  const data = useLoaderData();
  const [van, setVan] = useState(data?.find((van) => van.id === id));

  return (
    <div className="host-van-container">
      <Link to="/host/vans">← Back to all vans</Link>

      <div className="host-van-detail-wrapper">
        {van && <VanDetail van={van} id={id} />}
        {!van && <h1>No vans </h1>}
      </div>
    </div>
  );
}

export default HostVanDetail;

function VanDetail({ van, id }) {
  const { name, type, price, imageUrl, description } = van;
  return (
    <div className="host-van-detail-box">
      <img src={imageUrl} alt={name} />
      <div className="van-detail-title-box">
        <span
          style={{
            backgroundColor:
              type === "simple"
                ? "#E17654"
                : type === "rugged"
                ? "#115E59"
                : type === "luxury"
                ? "#161616"
                : "transparent",
          }}
        >
          {type}
        </span>
        <h1>{name}</h1>
        <p>
          <strong>${price}</strong>/day
        </p>
      </div>
      <div className="van-detail-nav-box">
        <NavLink
          to="."
          end
          style={({ isActive }) => {
            return {
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => {
            return {
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#fca311" : "",
            };
          }}
          to="photos"
        >
          Photos
        </NavLink>
      </div>
      <Outlet context={van} />
    </div>
  );
}
