import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  makeStyles,
  Avatar
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  content: {
    fontFamily: (note) => {
      if (note.category === 'money') {
        return 'Barlow'
      }
      if (note.category === 'todos') {
        return 'Yaldevi'
      }
      return 'Assistant'
    }
  },
  border: {
    border: (note) => {
      if (note.category === 'money') {
        return `1px solid ${green[500]}`
      }
      if (note.category === 'todos') {
        return `1px solid ${pink[500]}`
      }
      if (note.category === 'reminders') {
        return `1px solid ${blue[500]}`
      }
      return `1px solid ${yellow[700]}`
    }
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'money') {
        return green[500]
      }
      if (note.category === 'todos') {
        return pink[500]
      }
      if (note.category === 'reminders') {
        return blue[500]
      }
      return yellow[700]
    }
  }
})

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note)

  return (
    <>
      <Card elevation={1} className={classes.border}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
            variant='body2'
            color='textSecondary'
          >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
