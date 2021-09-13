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
const managedSpaces = [{
  vid: 'danitheturtle',
  uid: 'daniUserId',
  name: 'Dani',
  descriptionShort: 'Making humanitaria happen'
}, {
  vid: 'mutualaidcinci',
  uid: 'daniUserId',
  name: 'Mutual Aid Cincinnati',
  descriptionShort: 'Mutually helping each other in the cincinnati area'
}];
const joinedSpaces = [{
  vid: 'traaaaaaaaaaaans',
  uid: 'kwoeoroo2o2o',
  name: 'Traaaaaaaaaaaans',
  descriptionShort: 'Life is pain'
}, {
  vid: 'itcouldhappenhere',
  uid: 'robertEvans',
  name: 'It Could Happen Here',
  descriptionShort: 'A daily show about how to survive the climate crumbles' //max length
}, {
  vid: 'completeanarchy',
  uid: 'dkwowormmsmw',
  name: 'COMPLETEANARCHY',
  descriptionShort: 'Memes for edgy anarchists'
}];
const allSpaces = [{
  vid: 'politics',
  uid: 'kwoeoroo2o2o',
  name: 'Politics',
  descriptionShort: 'Discussing US politics'
}, {
  vid: 'activism',
  uid: 'robertEvans',
  name: 'Activism',
  descriptionShort: 'A community to discuss activism' //max length
}, {
  vid: 'twoxchromosomes',
  uid: 'dkwowormmsmw',
  name: 'TwoXChromosomes',
  descriptionShort: 'A community of feminists supporting each other'
}];

export const SpacesSidebar = ({ spacename }) => {
  const history = useContext(HistoryContext);
  return <List sx={{ width: 1, maxWidth: 340, height: 1, padding: 0, backgroundColor: 'background.default' }}>
    <Box component="li"><Typography variant="h4" component="h2" sx={{ px: 2, my: 2 }}>Spaces</Typography></Box>
    <SpaceListItem
      selected={ !spacename && history.location.pathname === '/spaces' }
      height={8}
      path='/spaces'
      avatar={<DashboardSharpIcon sx={{ position: 'relative', width: 48, height: 48, color: 'primary.dark' }}/>}
      primary="Dashboard"
    />
    <SpaceListItem
      selected={ !spacename && history.location.pathname === '/all' }
      height={8}
      path='/all'
      avatar={<LayersSharpIcon sx={{ position: 'relative', width: 48, height: 48, color: 'primary.dark', top: 2 }}/>}
      primary="All"
    />
    {managedSpaces?.map((space, index) => {
      return <SpaceListItem
        key={space.vid}
        selected={ space.vid === spacename }
        height={12}
        path={`/${space.vid}`}
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
        path={`/${space.vid}`}
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
        path={`/${space.vid}`}
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
