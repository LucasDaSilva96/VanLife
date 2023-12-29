import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { imageUrl, name } = useOutletContext();

  if (!name) return <h1 style={{ gridRow: "3 / 5" }}>Loading...</h1>;
  return (
    <div
      style={{
        gridRow: "3 / 4",
        marginTop: "20px",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ maxWidth: "10rem", height: "auto" }}
      />
    </div>
  );
}

export default HostVanPhotos;
