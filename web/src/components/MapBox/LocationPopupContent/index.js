import React, { useCallback, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemButton,
  Typography,
  Collapse
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AddLocationSharpIcon from '@mui/icons-material/AddLocationSharp';
import { AddressString } from '../../../components';

export const LocationPopupContent = ({ mapRef, location }) => {
  const theme = useTheme();
  const [addListOpen, setAddListOpen] = useState(false);
  
  const onFocusClick = useCallback(() => {
    if (mapRef && location?.lat) {
      mapRef.flyTo([location.lat, location.lon], 16);
    }
  }, [mapRef, location?.lat, location?.lon]);
  
  const onAddClick = () => {
    setAddListOpen(!addListOpen);
  }
  const copyLatLon = () => {
    
  }
  
  return <List>
    <ListItem disablePadding>
      <AddressString location={location} sx={{ px: theme.spacing(2), height: theme.spacing(8) }}/>
    </ListItem>
    <Divider />
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon><NearMeSharpIcon/></ListItemIcon>
        <ListItemText primary="Things Happening Nearby" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton onClick={onFocusClick}>
        <ListItemIcon><LocationSearchingSharpIcon/></ListItemIcon>
        <ListItemText primary="Focus Here" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton onClick={onAddClick}>
        <ListItemIcon><AddLocationSharpIcon/></ListItemIcon>
        <ListItemText primary="Use Location For New..." />
        {addListOpen ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
      </ListItemButton>
    </ListItem>
    <Collapse in={addListOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: theme.spacing(4) }}>
          <ListItemIcon>
            <AddSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Event" />
        </ListItemButton>
        <ListItemButton sx={{ pl: theme.spacing(4) }}>
          <ListItemIcon>
            <AddSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Space" />
        </ListItemButton>
      </List>
    </Collapse>
    <Divider />
    <ListItem disablePadding>
      <ListItemButton onClick={copyLatLon}>
        <ListItemIcon><LocationSearchingSharpIcon/></ListItemIcon>
        <ListItemText primary={`Lat: ${location.lat.substring(0, 6)},  Lon: ${location.lon.substring(0, 6)}`} />
      </ListItemButton>
    </ListItem>
  </List>;
};
