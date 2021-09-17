import React from 'react';
import { ImageList, ImageListItem, Box } from '@mui/material';

export const GalleryFeature = ({ data }) => {
  return <Box  sx={{ overflowX: 'hidden', overflowY: 'auto', height: 1, width: 1}}>
    <ImageList variant="masonry" cols={3} gap={8} sx={{my: 0}}>
      {data.map((item) => (
        <ImageListItem key={item.img}>
          <Box
            component="img"
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
            sx={{ width: 1, height: 1}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
};