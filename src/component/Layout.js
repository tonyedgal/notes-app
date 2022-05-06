import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider
} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import avatar from '../images/avatar.jpg'
import Appbar from './Appbar'

let drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    active: {
      backgroundColor: '#f4f4f4'
    },
    date: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    navAvatar: {
      width: theme.spacing(3),

      height: theme.spacing(3)
    },
    list: {
      padding: 0
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuUser = [
    {
      text: 'Spaceman',
      icon: <Avatar src={avatar} alt='Avatar' className={classes.navAvatar} />,
      path: '/profile'
    }
  ]
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='primary' />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='primary' />,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>
      {/* App bar */}
      <Appbar />

      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.date}>
            {format(new Date(), 'MMMM do Y')}
          </Typography>
        </div>
        <Divider />
        {/* List & links */}
        <List className={classes.list}>
          {menuUser.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
