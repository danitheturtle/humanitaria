import React from 'react';
import {
  List,
  Badge,
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { SpaceName } from '../../../../components';

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
      notifications: [{}, {}],
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

  return <List sx={{ width: 1, padding: 0, flexGrow: 0 }}>
    {userData?.managedSpaces?.map((space, index) => {
      return <React.Fragment key={space.vid}>
        <ListItemButton 
          selected={index===0} 
          color="secondary"
          disableRipple
          component="li"
          sx={{ 
            height: 64, 
            py: 0.5, 
            px: 1,
            '&:hover,&:focus': {
              backgroundColor: 'grey.100'
            }
          }}
        >
          <ListItemAvatar>
            <Badge overlap="circular" color="info" badgeContent={userData?.managedSpaces?.[0]?.notifications?.length}>
              <Avatar>H</Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary={space.name}
            secondary={<React.Fragment>
              <SpaceName vid={space.vid} sx={{ ml: -0.8 }}/>
            </React.Fragment>}
          />
          <ListItemSecondaryAction>
            <Tooltip title="Settings">
              <IconButton edge="end" aria-label="settings">
                <SettingsSharpIcon />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItemButton>
        <Divider component="li" />
      </React.Fragment>
    })}
    <ListItemButton color="secondary" component="li" sx={{ height: 56, py: 0.5, px: 1 }}>
      <ListItemIcon sx={{px: 1}}><AddSharpIcon/></ListItemIcon>
      <ListItemText primary="Create a Space"/>
    </ListItemButton>
    <Divider component="li" />
  </List>
};
