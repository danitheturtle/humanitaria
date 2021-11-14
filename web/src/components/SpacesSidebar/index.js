import React, { useContext } from 'react';
import {
  List,
  Box,
  ListItemButton,
  Container,
  Typography,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
  Tooltip
} from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import IndeterminateCheckBoxSharpIcon from '@mui/icons-material/IndeterminateCheckBoxSharp';
import { HistoryContext } from '../../App';
import { SpaceListItem, SpaceListItemDescription } from './SpaceListItem';

export const SpacesSidebar = ({ spacename, managedSpaces, joinedSpaces, allSpaces }) => {
  const history = useContext(HistoryContext);
  return <List sx={{ position: 'sticky', width: 1, maxWidth: 340, height: 1, padding: 0, overflowY: 'scroll', overflowX: 'hidden', backgroundColor: 'background.default' }}>
    <Box component="li"><Typography variant="h4" component="h2" sx={{ px: 2, my: 2 }}>Spaces</Typography></Box>
    <SpaceListItem
      selected={ !spacename && history.location.pathname === '/spaces' }
      height={8}
      path='/s'
      avatar={<DashboardSharpIcon sx={{ position: 'relative', width: 48, height: 48, color: 'primary.dark' }}/>}
      primary="Dashboard"
    />
    <SpaceListItem
      selected={ !spacename && history.location.pathname === '/all' }
      height={8}
      path='/s/all'
      avatar={<LayersSharpIcon sx={{ position: 'relative', width: 48, height: 48, color: 'primary.dark', top: 2 }}/>}
      primary="All"
    />
    {managedSpaces?.map((space, index) => {
      return <SpaceListItem
        key={space.vid}
        selected={ space.vid === spacename }
        height={12}
        path={`/s/${space.vid}`}
        avatar={<Avatar width={48} height={48}>H</Avatar>}
        primary={space.name}
        secondary={<SpaceListItemDescription space={space} />}
        secondaryActionText="Settings"
        secondaryActionColor='secondary'
        secondaryActionIcon={<SettingsSharpIcon sx={{color: 'grey.600'}}/>}
      />
    })}
    <Divider component="li" />
    {joinedSpaces?.map((space, index) => {
      return <SpaceListItem
        key={space.vid}
        selected={ space.vid === spacename }
        height={12}
        path={`/s/${space.vid}`}
        avatar={<Avatar width={48} height={48}>H</Avatar>}
        primary={space.name}
        secondary={<SpaceListItemDescription space={space} />}
        secondaryActionText="Leave"
        secondaryActionColor='error'
        secondaryActionIcon={<IndeterminateCheckBoxSharpIcon sx={{ color: 'error.light' }}/>}
      />
    })}
    <Box component="li"><Typography variant="h4" component="h2" sx={{ px: 2, mb: 2, mt: 4 }}>All Spaces</Typography></Box>
    {allSpaces?.map((space, index) => {
      return <SpaceListItem
        key={space.vid}
        selected={ space.vid === spacename }
        height={12}
        path={`/s/${space.vid}`}
        avatar={<Avatar width={48} height={48}>H</Avatar>}
        primary={space.name}
        secondary={<SpaceListItemDescription space={space} />}
        secondaryActionText="Join"
        secondaryActionColor='info'
        secondaryActionIcon={<AddBoxSharpIcon />}
      />
    })}
  </List>
};
