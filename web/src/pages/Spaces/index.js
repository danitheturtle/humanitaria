import React from 'react';
import { List, Box, ListItemButton, Container, Typography, ListItemAvatar, ListItemText, Divider, Avatar, IconButton, ListItemSecondaryAction, Tooltip } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import { SpacesSidebar, SpaceName } from '../../components';

export const Spaces = ({ queryRef, spacename }) => {  
  return <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', width: 1, height: 1 }}>
    <SpacesSidebar spacename={spacename} />
    <Container>content</Container>
  </Box>
};