import React, { useMemo } from 'react';
import leaflet from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { Box } from '@mui/material';
import { Marker as DefaultMarker } from 'react-leaflet';

export const Marker = ({ iconComponent, leafletIconProps, children, ...props }) => {
  const renderedIcon = useMemo(() => leaflet.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString((
      <Box sx={{ width: '48px', height: '48px', position: 'absolute' }}>
        <Box sx={{
          width: '2px',
          height: '8px',
          position: 'absolute',
          top: '34px',
          left: '23px',
          borderRadius: '2px',
          boxShadow: '0px 0px 20px 10px rgb(0 0 0)'
        }} />
        { iconComponent }
      </Box>
    )),
    ...leafletIconProps
  }), []);
  
  return <DefaultMarker icon={renderedIcon} {...props}>
    {children}
  </DefaultMarker>
};