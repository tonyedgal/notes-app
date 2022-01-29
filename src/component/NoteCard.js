import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  content: {
    fontFamily: "Yaldevi",
  },
  border: {
    border: (note) => {
      if (note.category === "money") {
        return "1px solid #55efc4";
      }
      if (note.category === "todos") {
        return "1px solid #6c5ce7";
      }
      if (note.category === "reminders") {
        return "1px solid #0097e6";
      }
      if (note.category === "work") {
        return "1px solid #e84118";
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <>
      <Card elevation={1} className={classes.border}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography
            className={classes.content}
            variant="body2"
            color="textSecondary"
          >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
