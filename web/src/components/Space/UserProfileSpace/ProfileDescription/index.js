import React from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SpaceName } from '../../../../components';

const makeStyles = theme => ({
  ConnectionButton: {
    position: 'absolute', 
    top: 0, 
    right: theme => theme.spacing(3), 
    [theme.breakpoints.up('xl')]: { 
      right: 0 
    } 
  },
  ProfileDescription: {
    flex: 2, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    flexDirection: 'column', 
    maxHeight: theme.spacing(24),
    minWidth: theme.spacing(42),
    fontSize: 16,
    color: 'text.secondary',
    fontStyle: 'italic',
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      maxHeight: theme.spacing(16.5),
      pb: 3,
      fontSize: 18
    }
  }
})

export const ProfileDescription = ({profile}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return <React.Fragment>
    <Typography variant="h1" component="h2" sx={{ flex: 0 }}>{ profile.name }</Typography>
    <Button variant="outlined" id="ConnectionButton" color="primary" sx={ styles.ConnectionButton }>
      Unfollow
    </Button>
    <SpaceName vid={ profile.vid } sx={{ flex: 0, [theme.breakpoints.up('xl')]: { my: 1 } }}/>
    <Typography component="div" id="ProfileDescription" sx={ styles.ProfileDescription }>
      { profile.description }
    </Typography>
    <Divider sx={{width: '45%', flex: 0, backgroundColor: 'primary.main'}}/>
  </React.Fragment>
};