import React from "react";
import { getHostAPI } from "../../api/fetchVans";

function Dashboard() {
  const data = async () => await getHostAPI("example@test.com", "test123");
  data();
  return (
    <React.Fragment>
      <h1>Host Dashboard</h1>
    </React.Fragment>
  );
}

export default Dashboard;
