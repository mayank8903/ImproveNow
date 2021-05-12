import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Billing from "./Billing";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "white !important",
  },
}));

function Header(props) {
  const classes = useStyles();
  const renderHeader = () => {
    switch (props.authReducer) {
      case null:
        return;
      case false:
        return (
          <Button
            href="/auth/google"
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "black",
              margin: "0 10px",
            }}
          >
            Login with Google
          </Button>
        );
      default:
        return (
          <React.Fragment>
            <Billing />
            <Button
              style={{
                color: "yellow",

                margin: "0 10px",
              }}
            >
              Credits: {props.authReducer.posts}
            </Button>
            <Button
              variant="outlined"
              href="/api/logout"
              style={{
                color: "white",
                backgroundColor: "black",
                margin: "0 10px",
              }}
            >
              Logout
            </Button>
          </React.Fragment>
        );
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              className={classes.link}
              to={props.authReducer ? "/surveys" : "/"}
            >
              {" "}
              ImproveNow{" "}
            </Link>
          </Typography>

          {renderHeader()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { authReducer: state.authReducer };
};

export default connect(mapStateToProps)(Header);
