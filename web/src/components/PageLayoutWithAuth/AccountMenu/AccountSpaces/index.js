import React from 'react';
import { List, ListItemButton, ListItemSecondaryAction, Divider, ListItemText, ListItemAvatar, Avatar, Typography, IconButton } from '@mui/material';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

export const AccountSpaces = ({ queryRef }) => {
  const userData = {
    __typename: 'UserType',
    uid: 'daniUserId',
    username: 'danitheturtle',
    name: 'Dani Timko',
    picture: '',
    managedSpaces: [{
      __typename: 'UserProfileType',
      vid: 'danitheturtle',
      uid: 'daniUserId',
      picture: '',
      name: 'Dani',
      notifications: [],
      spaceSettings: {}
    }, {
      vid: 'mutualaidcinci',
      uid: 'daniUserId',
      picture: '',
      name: 'Mutual Aid Cincinnati',
      notifications: [],
      spaceSettings: []
    }]
  };
  
  return <List sx={{ width: 1 }}>
    {userData?.managedSpaces?.map(space => {
      return <ListItemButton alignItems="flex-start" divider>
        <ListItemAvatar><Avatar>H</Avatar></ListItemAvatar>
        <ListItemText
          primary={space.name}
          secondary={<React.Fragment>
            <Typography component="div" variant="body2" color="text.primary">
              {`~${space.vid}`}
            </Typography>
          </React.Fragment>}
        />
        <ListItemSecondaryAction><IconButton edge="end" aria-label="settings"><SettingsSharpIcon /></IconButton></ListItemSecondaryAction>
      </ListItemButton>
    })}
  </List>
};
