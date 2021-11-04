import React, { useRef, useState, useEffect, Suspense } from 'react';
import { usePreloadedQuery } from 'react-relay';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link, Notes, SignOut, CountToNumber } from '../../components';
import { useAuthOnly } from '../../hooks';
import * as actionMapQuery from '../../routes/__generated__/actionMapQuery.graphql';
import { MapBox, LocationSearch, ActionMapSidebar } from '../../components';

const makeStyles = (theme, mapSidebarOpen, sidebarWidth) => ({
  MapBoxWrapper: {
    flex: 1, 
    ml: mapSidebarOpen ? sidebarWidth : 0, 
    display: 'flex', 
    justifyContent: 'center', 
    transition: theme.transitions.create(['width', 'margin'], { 
      easing: theme.transitions.easing.easeInOut, 
      duration: theme.transitions.duration[mapSidebarOpen ? 'leavingScreen' : 'enteringScreen']
    }),
    '& .leaflet-control': {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeInOut, 
        duration: theme.transitions.duration[mapSidebarOpen ? 'leavingScreen' : 'enteringScreen']
      }),
      mt: mapSidebarOpen ? theme.spacing(2) : theme.spacing(7)
    }
  },
  ActionMapBox: { 
    display: 'flex', 
    width: 1, 
    height: 1 
  },
  OpenButton: {
    position: 'absolute',
    padding: 0,
    left: theme.spacing(1), 
    top: theme.spacing(1.5), 
    width: theme.spacing(5),
    height: theme.spacing(5),
    zIndex: theme.zIndex.appBar - 20,
    color: theme.palette.grey[800],
    '& svg': {
      width: theme.spacing(5),
      height: theme.spacing(5)
    }
  }
})

export const ActionMap = ({ queryRef }) => {
  const theme = useTheme();
  const actionMapQueryData = usePreloadedQuery(actionMapQuery, queryRef);
  const [mapSidebarOpen, setMapSidebarOpen] = useState(true);
  const [mapRef, setMapRef] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  
  const sidebarWidth = theme.spacing(64);
  const styles = makeStyles(theme, mapSidebarOpen, sidebarWidth);
  
  return <Box sx={styles.ActionMapBox}>
    <ActionMapSidebar 
      location={selectedLocation} 
      setSelectedLocation={setSelectedLocation} 
      open={mapSidebarOpen} 
      setOpen={setMapSidebarOpen} 
      sidebarWidth={sidebarWidth}
    />
    <IconButton
      size="large" 
      onClick={() => setMapSidebarOpen(true)} 
      sx={ styles.OpenButton } 
      component="div"
    >
      <MenuSharpIcon />
    </IconButton>
    <Box sx={styles.MapBoxWrapper}>
      <LocationSearch 
        setValue={setSelectedLocation} 
        value={selectedLocation} 
        queryData={actionMapQueryData} 
        sx={{ position: 'absolute' }} 
      />
      <MapBox 
        setMapRef={ setMapRef } 
        mapRef={ mapRef } 
        queryData={ actionMapQueryData }
        location={ selectedLocation }
        setLocation={ setSelectedLocation }
      />
    </Box>
  </Box>
}