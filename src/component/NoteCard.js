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
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles();

  return (
    <>
      <Card elevation={1}>
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
