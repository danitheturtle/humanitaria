import React from 'react';
import { Typography, Button, Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SpaceName } from '../../../components';

const makeStyles = theme => ({
  ConnectionButton: {
    position: 'absolute', 
    top: 0, 
    right: theme.spacing(3), 
    [theme.breakpoints.up('xl')]: { 
      right: 0 
    } 
  },
  ProfileDescription: {
    flex: 2, 
    maxHeight: theme.spacing(24),
    minWidth: theme.spacing(42),
    fontSize: 16,
    color: 'text.secondary',
    fontStyle: 'italic',
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      maxHeight: theme.spacing(16.5),
      fontSize: 18
    }
  },
  ProfileDescBox: {
    height: 1,
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    flexDirection: 'column'
  },
  Divider: {
    width: '45%', flex: 0, backgroundColor: 'primary.main'
  }
})

export const ProfileDescription = ({ profile, withDivider = true }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return <Box sx={styles.ProfileDescBox}>
    <Typography variant="h1" component="h2" sx={{ flex: 0 }}>{ profile.name }</Typography>
    <Button variant="outlined" id="ConnectionButton" color="primary" sx={ styles.ConnectionButton }>
      Unfollow
    </Button>
    <SpaceName textVariant="subtitle1" vid={ profile.vid } sx={{ flex: 0 }}/>
    <Typography component="div" id="ProfileDescription" sx={ styles.ProfileDescription }>
      { profile.descriptionLong }
    </Typography>
    { withDivider && <Divider sx={styles.Divider} />}
  </Box>
};