import React, { useState } from 'react';
import {
  Drawer, 
  Box, 
  Typography, 
  Button,
  BottomNavigation,
  BottomNavigationAction,
  ListItem, 
  List, 
  ListItemIcon, 
  Divider, 
  ListItemText
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import EventSharpIcon from '@mui/icons-material/EventSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ConnectWithoutContactSharpIcon from '@mui/icons-material/ConnectWithoutContactSharp';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import EscalatorWarningSharpIcon from '@mui/icons-material/EscalatorWarningSharp';
import FamilyRestroomSharpIcon from '@mui/icons-material/FamilyRestroomSharp';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';

const makeStyles = (theme, sidebarWidth, open) => ({
  Drawer: {
    width: 0,
    flexShrink: 0,
    zIndex: theme.zIndex.appBar - 10,
    '& .MuiDrawer-paper': {
      pt: theme.spacing(8),
      backgroundColor: theme.palette.background.default,
      width: sidebarWidth,
      boxSizing: 'border-box'
    }
  },
  CloseButtonContainer: {
    py: 2,
    display: 'flex', 
    justifyContent: 'flex-end', 
    px: 2,
    position: 'absolute',
    right: 0
  },
  Header: {
    textAlign: 'center',
    mt: theme.spacing(4)
  },
  SearchModeSelectorWrapper: {
    width: '100%',
    my: theme.spacing(2)
  }
});

export const ActionMapSidebar = ({ open, sidebarWidth, setOpen }) => {
  const theme = useTheme();
  const styles = makeStyles(theme, sidebarWidth, open);
  const [value, setValue] = useState(0);
  
  return <Drawer
    sx={styles.Drawer}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <Box sx={styles.CloseButtonContainer}>
      <Button variant="text" startIcon={<CloseSharpIcon />} onClick={() => setOpen(false)}>Close</Button>
    </Box>
    <Typography variant="h4" component="h1" sx={styles.Header}>
      Get Involved
    </Typography>
    <Box sx={styles.SearchModeSelectorWrapper}>
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
        setValue(newValue);
      }}>
        <BottomNavigationAction label="Events" icon={<EventSharpIcon />} />
        <BottomNavigationAction label="Orgs / Groups" icon={<GroupsSharpIcon />} />
        <BottomNavigationAction label="Mutual Aid" icon={<EscalatorWarningSharpIcon/>} />
        <BottomNavigationAction label="Community" icon={<LocalFloristSharpIcon />} />
      </BottomNavigation>
    </Box>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxSharpIcon /> : <MailSharpIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>;
};