import React from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../component/NoteCard";
import { notes } from "../db";

export default function Notes() {
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/notes")
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data));
  // }, []);

  const handleDelete = (id) => {
    //   await fetch("http://localhost:8000/notes/" + id, {
    //     method: "DELETE",
    //   });

    //   const newNotes = notes.filter((note) => note.id !== id);

    //   setNotes(newNotes);
    if (notes.id === id) {
      console.log(`${notes.title} has been deleted`);
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
