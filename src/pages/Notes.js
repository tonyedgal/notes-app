import React, { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          {notes.map((note) => (
            <Grid key={note.id} xs={12} md={6} lg={4}>
              <Paper>{note.title}</Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
