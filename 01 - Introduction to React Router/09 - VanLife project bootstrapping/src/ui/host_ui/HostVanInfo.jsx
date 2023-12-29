import "../../css/HostVanDetail.css";
import { useOutletContext } from "react-router-dom";
import React from "react";

function HostVanInfo() {
  const { name, type, description } = useOutletContext();
  if (!name) return <h1 style={{ gridRow: "3 / 5" }}>Loading...</h1>;

  return (
    <React.Fragment>
      <div className="van-detail-name-category-box">
        <div>
          <h2>Name:</h2>
          <p>{name}</p>
        </div>

        <div>
          <h2>Category:</h2>
          <p>{type}</p>
        </div>
      </div>
      <div className="van-detail-description-box">
        <span>
          <strong>Description:</strong> {description}
        </span>
      </div>
      <div className="van-detail-visibility-box">
        <span>
          <strong>Visibility:</strong> Public
        </span>
      </div>
    </React.Fragment>
  );
}

export default HostVanInfo;
