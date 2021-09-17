import React from 'react';
import { Box, Avatar } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import { SpacesSidebar, Space } from '../../components';
const managedSpaces = [{
  __typename: 'UserProfileSpace',
  vid: 'danitheturtle',
  uid: 'daniUserId',
  name: 'Dani',
  descriptionShort: 'Making humanitaria happen'
}, {
  __typename: 'OrganizationProfileSpace',
  vid: 'mutualaidcinci',
  uid: 'daniUserId',
  name: 'Mutual Aid Cincinnati',
  descriptionShort: 'Mutually helping each other in the cincinnati area'
}];

export const Spaces = ({ queryRef, spacename }) => {
  return <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', width: 1, height: 1 }}>
    <SpacesSidebar spacename={spacename} />
    <Space data={managedSpaces[0]}/>
  </Box>
};