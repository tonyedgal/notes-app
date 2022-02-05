import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import avatar from "../images/avatar.jpg";

let drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    title: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Appbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} elevation={0} color="inherit">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Spaceman Notes
        </Typography>
        <Typography>SpaceMan</Typography>
        <Avatar src={avatar} alt="Avatar" className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
}
