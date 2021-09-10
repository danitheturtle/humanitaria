import React, { useEffect } from 'react';
import { Typography, AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from '../';
import { AccountMenu, AccountMenuSkeleton } from './AccountMenu';

export const PageLayoutWithAuth = ({ children }) => {
  return <Box sx={{ width: 1, height: 1 }}>
    <AppBar position="sticky" color="primary" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch'}}>
      <Toolbar disableGutters={true} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: 1, mx: 2 }}>
        <Link to="/">
          <Typography variant="h4" component="div" color="primary.contrastText" sx={{ position: 'relative', pb: '4px' }}>
            Humanitaria
            <Typography variant="caption" component="span" color="secondary" sx={{ position: 'absolute', top: -0.5 }}>ALPHA</Typography>
          </Typography>
        </Link>
        <Box sx={{ height: 1, display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
          <Link to="/">
            <Button variant="text" sx={{ height: 1, color: 'primary.contrastText' }} color="secondary">MAP</Button>
          </Link>
          <Link to="/landing">
            <Button variant="text" sx={{ height: 1, color: 'primary.contrastText' }} color="secondary">SPACES</Button>
          </Link>
          <Link to="/ideas">
            <Button variant="text" sx={{ height: 1, color: 'primary.contrastText' }} color="secondary">IDEAS</Button>
          </Link>
          <Link to="/chats">
            <Button variant="text" sx={{ height: 1, color: 'primary.contrastText' }} color="secondary">CHATS</Button>
          </Link>
        </Box>
        <React.Suspense fallback={<AccountMenuSkeleton />}> <AccountMenu /> </React.Suspense>
      </Toolbar>
    </AppBar>
    { children }
  </Box>
};