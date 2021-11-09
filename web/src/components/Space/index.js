import React from 'react';
import { Box } from '@mui/material';
import { UserProfileSpace } from './UserProfileSpace';
import { CommunitySpace } from './CommunitySpace';

export const Space = ({ data }) => {
  if (data.__typename === 'UserProfileSpace') {
    return <UserProfileSpace data={data}/>;
  }
  if (data.__typename === 'CommunitySpace') {
    return <CommunitySpace data={data}/>;
  }
  return <Box sx={{width: 1, flexGrow: 1, textAlign: 'center', pt: '300px'}}>Not Implemented Yet</Box>
}