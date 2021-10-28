import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import { Marker } from './Marker';
import { LocationOnClick } from './LocationOnClick';
import { AddressString } from '../../components';
import 'leaflet/dist/leaflet.css';

delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: ''
});

export const MapBox = ({ mapRef, setMapRef, queryData, location, setLocation, sx = {} }) => {
  const theme = useTheme();
  const [selectedLocationCoords, setSelectedLocationCoords] = useState(null);
  const popupRef = useRef(null);
  useEffect(() => {
    if (mapRef && !!location?.boundingBox?.x1) {
      mapRef.fitBounds([
        [location.boundingBox.x1, location.boundingBox.y1], 
        [location.boundingBox.x2, location.boundingBox.y2]
      ]);
      setSelectedLocationCoords([location.lat, location.lon])
    }
  }, [mapRef, location?.boundingBox?.x1, location?.boundingBox?.y1, location?.boundingBox?.x2, location?.boundingBox?.y2]);
  
  console.dir(popupRef);
  useEffect(() => {
    if (mapRef && popupRef.current && selectedLocationCoords) {
      popupRef.current.setLatLng(selectedLocationCoords).openOn(mapRef);
    }
  }, [popupRef.current, mapRef, selectedLocationCoords])
  
  return <Box id="mapid" component="div" sx={{ width: 1, height: 1, display: 'flex', justifyContent: 'stretch', alignItems: 'stretch', ...sx}}>
    <MapContainer 
      center={[39.103, -84.512]} 
      zoom={13} 
      style={{height: '100%', width: '100%'}} 
      whenCreated={setMapRef}
    >
      <TileLayer 
        attribution='<a href="https://www.nominatim.org">Nominatim</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      { selectedLocationCoords !== null && 
        <Marker 
          position={ selectedLocationCoords } 
          iconComponent={<RoomSharpIcon sx={{ position: 'absolute', color: theme.palette.info.main, fontSize: '48px' }} />}
          iconProps={{
            iconAnchor: [24, 48],
            popupAnchor: [0, -48],
            tooltipAnchor: [0, -48]
          }}
        >
          <Popup minWidth={300} ref={popupRef}>
            <AddressString location={location} />
          </Popup>
        </Marker>
      }
    </MapContainer>
    <Suspense fallback={<></>}>
      <LocationOnClick queryData={queryData} mapRef={mapRef} location={location} setLocation={setLocation} />
    </Suspense>
  </Box>
};



/*




*/