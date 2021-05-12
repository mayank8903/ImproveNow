import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: " flex-end",
          alignItems: "flex-end",
          minHeight: "50vh",
        }}
      >
        <Link to="/surveys/new">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
