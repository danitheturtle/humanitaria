import React, { useMemo } from 'react';
import { Box, Avatar } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import {managedSpaces, joinedSpaces, allSpaces} from '../../utils/mockData';
import { SpacesSidebar, Space } from '../../components';

export const Spaces = ({ queryRef, spacename }) => {
  const selectedSpace = useMemo(() => (managedSpaces.find(sp => sp.vid === spacename) ||
    joinedSpaces.find(sp => sp.vid === spacename) ||
    allSpaces.find(sp => sp.vid === spacename) || {}), [spacename]);

  return <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', width: 1, height: 1 }}>
    <SpacesSidebar 
      spacename={spacename} 
      managedSpaces={managedSpaces} 
      joinedSpaces={joinedSpaces} 
      allSpaces={allSpaces} 
    />
    <Space data={selectedSpace}/>
  </Box>
};
