import React, { useState, useRef } from 'react';
import { Slide, List, Divider, Badge, Typography, IconButton, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { renderTextWithSpaceId } from '../../components';

export const NotificationList = () => {
  const notificationsComponentRef = useRef(null);
  const [dismissedState, setDismissedState] = useState({});
  const [notificationData, setNotificationData] = useState([{
    id: 'jsowo2',
    unread: true,
    title: 'New Mention',
    content: 'Does ~danitheturtle know how much longer its ~redddds going to take to build this website?',
    action: 'goto /humanitariadev/p0ow02202'
  }, {
    id: 'jdkkwoo',
    unread: true,
    title: 'Idea Updates',
    content: 'Alex and 4 others gave your idea feedback. Go check it out!',
    action: 'goto /danitheturtle/i40202ls'
  }]);
  
  const dismissNotification = (notifId) => {
    setDismissedState({...dismissedState, [notifId]: true})
  }
  
  const readNotification = (notifId) => {
    setNotificationData(notificationData.map(notif => {
      if (notifId === notif.id) { notif.unread = false; }
      return notif;
    }));
  }
  
  return <React.Fragment>
    <Typography variant="h4" component="h2" sx={{ px: 8, mb: 2, mt: 4 }}>Notifications</Typography>
    <List ref={notificationsComponentRef} sx={{backgroundColor: 'primary.light', py: 0, flexGrow: 0}}>
      {notificationData?.map(notif => (
        <Slide 
          key={notif.id} 
          direction="left" 
          in={!dismissedState[notif.id]} 
          appear={false} 
          unmountOnExit={true}
          container={notificationsComponentRef.current}
        >
          <ListItemButton sx={{
            p: 2, 
            backgroundColor: 'background.default',
            '&:hover': {
              backgroundColor: 'secondary.light'
            }
          }} disableRipple onClick={() => readNotification(notif.id)}>
            <ListItemIcon sx={{ minWidth: 48 }}>
              <Badge color="info" variant="dot" invisible={!notif.unread}>
                <NotificationsSharpIcon/>
              </Badge>
            </ListItemIcon>
            <ListItemText component="div" sx={{ height: 1, m: 0, pr: 1}}>
              <Typography variant="h6" component="h3">{notif.title}</Typography>
              <Typography variant="subtitle2" component="div">{renderTextWithSpaceId(notif.content)}</Typography>
            </ListItemText>
            <ListItemSecondaryAction sx={{ height: 1, py: 1 }}>
              <IconButton edge="end" sx={{ mt: 0.1 }} onClick={() => dismissNotification(notif.id)}><CloseSharpIcon size="large"/></IconButton>
            </ListItemSecondaryAction>
          </ListItemButton>
        </Slide>
      ))}
    </List>
  </React.Fragment>;
};