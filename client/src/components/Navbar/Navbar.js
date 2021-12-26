import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";
import messageBoard from "../../images/reminder.png";
import useStyles from "./styles";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          id="title"
          variant="h2"
          align="center"
        >
          Message Board
        </Typography>
        <img
          className={classes.image}
          src={messageBoard}
          alt="icon"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={user.result.username}
              src={user.result.imageUrl}
            >
              {user.result.username.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.username}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
