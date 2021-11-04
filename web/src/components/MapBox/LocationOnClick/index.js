import React, { useEffect } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';

export const LocationOnClick = ({queryData, mapRef, location, setLocation}) => {
  const [{ locationNear }, findAtClickLocation] = useRefetchableFragment(graphql`
    fragment LocationOnClick_location on Query 
    @refetchable(queryName: "LocationOnClickQuery")
    @argumentDefinitions(input: { type: "locationNearInput!" }) {
      locationNear(input: $input) {
        id
        placeId
        lat
        lon
        category
        subCategory
        boundingBox {
          x1
          y1
          x2
          y2
        }
        ...AddressString_Address
      }
    }
  `, queryData);
  
  useEffect(() => {
    if (mapRef) {
      mapRef.on('click', (e) => {
        findAtClickLocation({ 
          input: { 
            lat: String(e.latlng.lat), 
            lon: String(e.latlng.lng), 
            zoom: mapRef.getZoom()
          }
        });
      });
    }
  }, [mapRef]);
  
  useEffect(() => {
    if (locationNear) {
      setLocation(locationNear);
    }
  }, [locationNear]);
  return <></>;
};