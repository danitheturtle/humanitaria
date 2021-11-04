import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import HolidayVillageSharpIcon from '@mui/icons-material/HolidayVillageSharp';
import ShareLocationSharpIcon from '@mui/icons-material/ShareLocationSharp';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import CropFreeSharpIcon from '@mui/icons-material/CropFreeSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import GavelSharpIcon from '@mui/icons-material/GavelSharp';

const categoryConfig = {
  locality: {
    country: {
      icon: props => <GavelSharpIcon {...props} />,
      getDisplayString: address => 
        `${address.countryCode.toUpperCase()} - ${address.country}`
    },
    state: { 
      icon: props => <AccountBalanceSharpIcon {...props} />, 
      getDisplayString: address => 
        `${address.state}, ${address.country}`
    },
    county: {
      icon: props => <CropFreeSharpIcon {...props} />,
      getDisplayString: address => 
        `${address.county} ${address.state}`
    },
    city: { 
      icon: props => <LocationCitySharpIcon {...props} />,
      getDisplayString: address => 
        `${address.city}, ${address.state}`
    },
    postcode: {
      icon: props => <ShareLocationSharpIcon {...props} />,
      getDisplayString: address => 
        `${address.city ? address.zip + ' ' + address.city : address.zip}${address.state ? ', ' + address.state : ''}`
    },
    district: {
      icon: props => <HolidayVillageSharpIcon {...props} />,
      getDisplayString: address =>
        `${address.city ? address.district + ', ' + address.city : address.district}${address.state ? ' ' + address.state : ''}`
    },
    other: {
      icon: props => <HolidayVillageSharpIcon {...props} />,
      getDisplayString: address =>
        `${address.label || address.address || address.district || address.city || address.county} ${address.state}`
    }
  }
}

const makeStyles = (theme, sx) => ({
  AddressString: {
    position: 'relative',
    display: 'flex',
    width: 1,
    height: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    p: 1,
    ...sx
  },
  Icon: {
    color: theme.palette.info.dark,
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  Address: {
    flex: 1,
    minWidth: '50%',
    pl: theme.spacing(1),
    overflow: 'hidden',
    whiteSpace: 'break-spaces',
    overflowWrap: 'break-word',
    lineHeight: 1.2
  }
});

export const AddressString = ({ location, withTypeIcon, sx }) => {
  const theme = useTheme();
  const styles = makeStyles(theme, sx);
  const locationData = useFragment(
    graphql`
      fragment AddressString_Address on Location {
        id
        category
        subCategory
        address {
          label
          address
          district
          city
          county
          state
          zip
          country
          countryCode
        }
      }
    `,
    location
  );
  
  const [addressString, icon] = useMemo(() => {
    let resAddress = '';
    let resIcon = <LocationOnSharpIcon sx={ styles.Icon } />;
    if (locationData.category === 'locality') {
      resIcon = categoryConfig.locality[locationData.subCategory].icon({ sx: styles.Icon });
      resAddress = categoryConfig.locality[locationData.subCategory].getDisplayString(locationData.address);
    } else {
      const address = locationData.address;
      if (address.label) {
        resAddress = address.label;
      }
      if (address.address) {
        resAddress += address.label ? ` ${address.address}` : address.address;
      }
      
      if (!resAddress && address.district) {
        resAddress = address.district;
        if (!address.address && !address.label) {
          resIcon = categoryConfig.locality.district.icon({ sx: styles.Icon });
        }
      }
      if (address.city) {
        resAddress += resAddress ? `, ${address.city}` : address.city;
        if (!address.address && !address.label && !address.district) {
          resIcon = categoryConfig.locality.city.icon({ sx: styles.Icon });
        }
      }
      if (!address.address && !address.label && !address.district && address.county) {
        resAddress += resAddress ? `, ${address.county}` : address.county;
        if (!address.city) {
          resIcon = categoryConfig.locality.county.icon({ sx: styles.Icon });
        }
      }
      if (address.state) {
        resAddress += resAddress ? ` ${address.state}` : address.state;
      }
      if (address.zip) {
        resAddress += resAddress ? `, ${address.zip}` : address.zip;
      }
    }
    return [resAddress, resIcon];
  }, [locationData?.id]);
  
  return <Box sx={styles.AddressString}>
    { icon }
    <Typography sx={styles.Address}>
      {addressString}
    </Typography>
  </Box>
};