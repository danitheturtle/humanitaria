import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const MapBox = ({ mapRef, setMapRef, bounds = [], sx = {} }) => {
  useEffect(() => {
    const newMap = leaflet.map('mapid').setView([39.103, -84.512], 13);
    leaflet.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '<a href="https://www.nominatim.org">Nominatim</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      tileSize: 256
    }).addTo(newMap);
    setMapRef(newMap);
  }, []);
  
  useEffect(() => {
    if (mapRef && !!bounds?.x1) {
      mapRef.fitBounds([
        [bounds.x1, bounds.y1], 
        [bounds.x2, bounds.y2]
      ]);
    }
  }, [mapRef, bounds.x1, bounds.y1, bounds.x2, bounds.y2]);
  
  return <Box id="mapid" component="div" sx={{ width: 1, height: 1, ...sx}}></Box>
};