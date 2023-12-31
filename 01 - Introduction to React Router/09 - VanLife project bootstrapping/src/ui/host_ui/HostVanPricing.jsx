import { useOutletContext, useParams } from "react-router-dom";

function HostVanPricing() {
  const { price } = useOutletContext();

  if (!price) return <h1 style={{ gridRow: "3 / 5" }}>Loading...</h1>;

  return (
    <div
      style={{
        fontSize: "1.5rem",
        color: "#161616",
        gridRow: "3 / 4",
        marginTop: "20px",
      }}
    >
      <span>
        <strong>${price}</strong>/day
      </span>
    </div>
  );
}

export default HostVanPricing;
