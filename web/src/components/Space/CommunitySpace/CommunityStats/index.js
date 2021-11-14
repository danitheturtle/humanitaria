import React from 'react';
import { Typography } from '@mui/material';

export const CommunityStats = ({data}) => {
  if (!data.stats) return <div/>;
  
  return <>
    { Object.entries(data.stats).map(([statKey, statValue]) => (
      <React.Fragment key={statKey}>
        <Typography 
          variant="subtitle2" 
          component="div" 
          sx={{ fontWeight: 600, fontSize: 15, textAlign: 'right', mr: 0.3 }}
        >
          {statKey}
        </Typography>
        <Typography 
          variant="body2" 
          component="div"
          sx={{ textAlign: 'left', ml: 0.3, pt: 0.3, '&:not(:last-child)': { mr: 4 } }}
        >
          {statValue}
        </Typography>
      </React.Fragment>
    ))}
  </>
};