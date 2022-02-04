import { React, useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  heading: {
    fontFamily: "Assistant",
    marginTop: 10,
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false); // set error state in react material ui forms
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <>
      <Container>
        <Typography
          className={classes.heading}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Create A New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.field}
            label="Note Details"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />

          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                label="Money"
                value="money"
              />
              <FormControlLabel
                control={<Radio />}
                label="Todos"
                value="todos"
              />
              <FormControlLabel
                control={<Radio />}
                label="Reminders"
                value="reminders"
              />
              <FormControlLabel control={<Radio />} label="Work" value="work" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
