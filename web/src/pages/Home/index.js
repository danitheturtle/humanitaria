import React, { useRef, useState, useEffect} from 'react';
import { usePreloadedQuery } from 'react-relay';
import leaflet from 'leaflet';
import { Box } from '@mui/material'
import { Link, Notes, SignOut, CountToNumber } from '../../components';
import { useAuthOnly } from '../../hooks';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';
import 'leaflet/dist/leaflet.css';

delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const Home = ({ queryRef }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState();
  // useAuthOnly();
  const homeQueryData = usePreloadedQuery(homeQuery, queryRef);
  
  useEffect(() => {
    const newMap = leaflet.map('mapid').setView([39.103, -84.512], 13);
    leaflet.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      tileSize: 256
    }).addTo(newMap);
    setMap(newMap);
  }, [])
  
  return <Box id="mapid" component="div" sx={{ width: 1, height: 1 }} ref={mapRef}></Box>
}