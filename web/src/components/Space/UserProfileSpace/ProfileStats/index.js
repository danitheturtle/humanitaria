import React from 'react';
import { Box, Typography } from '@mui/material';

export const ProfileStats = ({ stats }) => {
  return <React.Fragment>
    { Object.entries(stats).map(([detailKey, detailVal]) => (
      <Box 
        key={detailKey} 
        component="div" 
        sx={{
          display: 'flex', 
          flexDirection: 'row', 
          whiteSpace: 'nowrap',
          alignItems: 'stretch'
      }}>
        <Typography 
          variant="subtitle2" 
          component="span" 
          sx={{
            fontWeight: 600, 
            fontSize: 15, 
            textAlign: 'right', 
            flex: 1, 
            pr: 0.4, 
            py: 0.25 
        }}>
          {detailKey}
        </Typography>
        <Typography 
          variant="body2" 
          component="span" 
          sx={{ 
            textAlign: 'left', 
            maxWidth: theme => theme.spacing(14), 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            flex: 1, 
            pl: 0.4, 
            py: 0.5
        }}>
          {detailVal}
        </Typography>
      </Box>
    ))}
  </React.Fragment>
};