import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const ProfileConnections = ({ connectedSpaces }) => {
  const theme = useTheme();
  return <React.Fragment>
    <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>Connections</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', m: theme => theme.spacing(-0.6), mt: 1.5}}>
      { connectedSpaces.map((n) => (
        <Avatar key={n} sx={{ 
          m: 0.5, 
          p: 0, 
          height: theme => theme.spacing(7.4), 
          width:  theme => theme.spacing(7.4), 
          [theme.breakpoints.up('xl')]: { 
            height: theme => theme.spacing(6.3), 
            width: theme => theme.spacing(6.3) 
          } 
        }}>{n}</Avatar>
      )) }
    </Box>
  </React.Fragment>
};