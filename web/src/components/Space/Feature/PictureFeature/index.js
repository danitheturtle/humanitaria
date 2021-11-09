import React from 'react';
import { Box } from '@mui/material';

export const PictureFeature = ({ data }) => {
  return <Box  sx={{ overflowX: 'hidden', overflowY: 'hidden', height: 1, width: 1}}>
    <Box
      component="img"
      src={`${data.img}`}
      alt={data.title}
      loading="lazy"
      sx={{ width: 1, height: 1 }}
    />
  </Box>
};