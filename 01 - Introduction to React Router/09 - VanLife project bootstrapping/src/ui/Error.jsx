import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <h1 style={{ textAlign: "center", padding: "40px 10px", color: "red" }}>
      An error occurred fetching the data
    </h1>
  );
}

export default Error;
