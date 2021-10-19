import React, { useRef, useState, useEffect, Suspense } from 'react';
import { usePreloadedQuery } from 'react-relay';
import { Box } from '@mui/material';
import { Link, Notes, SignOut, CountToNumber } from '../../components';
import { useAuthOnly } from '../../hooks';
import * as actionMapQuery from '../../routes/__generated__/actionMapQuery.graphql';
import { MapBox, LocationSearch } from '../../components';

export const ActionMap = ({ queryRef }) => {
  const actionMapQueryData = usePreloadedQuery(actionMapQuery, queryRef);
  const [mapRef, setMapRef] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  console.dir(selectedLocation);
  return <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: 1, height: 1 }}>
    <LocationSearch setValue={setSelectedLocation} value={selectedLocation} queryData={actionMapQueryData} />
    <MapBox 
      setMapRef={ setMapRef } 
      mapRef={ mapRef } 
      bounds={selectedLocation?.boundingBox}
      sx={{ position: 'absolute', top: 0, left: 0 }}
    />
  </Box>
}