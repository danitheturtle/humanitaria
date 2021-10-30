import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import { Marker } from './Marker';
import { LocationOnClick } from './LocationOnClick';
import { AddressString } from '../../components';
import { LocationPopupContent } from './LocationPopupContent';
import 'leaflet/dist/leaflet.css';

delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: ''
});

const makeStyles = (theme, sx) => ({
  MapContainer: {
    width: 1, 
    height: 1, 
    display: 'flex', 
    justifyContent: 'stretch', 
    alignItems: 'stretch', 
    '& .leaflet-popup': {
      margin: 0,
      '& .leaflet-popup-content-wrapper': {
        boxShadow: 'none',
        borderRadius: '0px',
        p: '0px',
        border: `2px solid ${theme.palette.primary.dark}`,
      },
      '& .leaflet-popup-content': {
        minWidth: theme.spacing(42),
        width: theme.spacing(42),
        margin: 0
      },
      '& .leaflet-popup-tip': {
        opacity: 0,
        boxShadow: 'none'
      },
      '& a.leaflet-popup-close-button': {
        fontSize: theme.spacing(3),
        width: theme.spacing(3),
        height: theme.spacing(3),
        lineHeight: 1,
        padding: 0,
        top: theme.spacing(0.5),
        right: theme.spacing(0.5)
      }
    },
    ...sx
  },
  MapIcon: {
    position: 'absolute', 
    color: theme.palette.info.main, 
    fontSize: '48px'
  }
})

export const MapBox = ({ mapRef, setMapRef, queryData, location, setLocation, sx = {} }) => {
  const theme = useTheme();
  const styles = makeStyles(theme, sx);
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
  
  useEffect(() => {
    if (mapRef && popupRef.current && selectedLocationCoords) {
      popupRef.current.setLatLng(selectedLocationCoords).openOn(mapRef);
    }
  }, [popupRef.current, mapRef, selectedLocationCoords]);
  
  return <Box id="mapid" component="div" sx={styles.MapContainer}>
    <MapContainer 
      center={[39.103, -84.512]} 
      zoom={13} 
      style={{
        height: '100%', width: '100%'
      }} 
      whenCreated={setMapRef}
    >
      <TileLayer 
        attribution='<a href="https://www.nominatim.org">Nominatim</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      { selectedLocationCoords !== null && 
        <Marker 
          position={ selectedLocationCoords } 
          iconComponent={<RoomSharpIcon sx={styles.MapIcon} />}
          leafletIconProps={{
            iconAnchor: [24, 48],
            popupAnchor: [12, -64],
            tooltipAnchor: [0, -48]
          }}
        >
          <Popup ref={popupRef}>
            <LocationPopupContent mapRef={mapRef} location={location} />
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