import * as React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "blue",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  title: {
    textAlign: "center",
    textDecoration: "underline",
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Typography
          className={classes.title}
          variant="h3"
          textColor="primary"
          component="h2"
          gutterBottom
        >
          Create page
        </Typography>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={() => console.log("you clicked me")}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </Container>
    </>
  );
}
