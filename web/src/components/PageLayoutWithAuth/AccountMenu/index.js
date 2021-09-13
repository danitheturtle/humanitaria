import React, { useEffect, useContext, useState, useMemo } from 'react';
import { Box, Avatar, Button, Typography, Skeleton, Paper, SwipeableDrawer } from '@mui/material';
import { graphql, useQueryLoader, usePreloadedQuery, useRelayEnvironment, loadQuery } from 'react-relay';
import { HistoryContext } from '../../../App';
import { AccountSpaces } from './AccountSpaces';
import { NotificationList, SignIn, Link } from '../../../components';
import { AccountMenuActions } from './AccountMenuActions';
import * as AccountMenuQuery from './__generated__/AccountMenuQuery.graphql';

export const AccountMenu = () => {
  const history = useContext(HistoryContext);
  const environment = useRelayEnvironment();
  const [accountDrawerOpen, setAccountDrawerOpen] = useState(false);
  const initialQueryRef = useMemo(() => {
    return loadQuery(environment, graphql `
      query AccountMenuQuery {
        me {
          id
          uid
          picture
        }
      }
    `, {}, { fetchPolicy: 'store-or-network' });
  }, []);
  const [queryRef, reloadQuery] = useQueryLoader(AccountMenuQuery, initialQueryRef);
  const accountData = usePreloadedQuery(AccountMenuQuery, queryRef);
  const handleOpenAccountDrawer = () => setAccountDrawerOpen(true);
  const handleCloseAccountDrawer = () => setAccountDrawerOpen(false);
  const reloadAndCloseDrawer = (...reloadArgs) => {
    reloadQuery(...reloadArgs);
    setAccountDrawerOpen(false);
  }
  if (history.location.pathname === '/landing') {
    return <Box sx={{ width: 32, height: 32 }}/>
  }

  return <Box>
    <Avatar sx={{ width: 32, height: 32 }} onClick={ handleOpenAccountDrawer }>H</Avatar>
    <SwipeableDrawer
      anchor="right"
      open={ accountDrawerOpen }
      onOpen={ handleOpenAccountDrawer }
      onClose={ handleCloseAccountDrawer }
      elevation={0}
    >
      <Box sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', width: '100vw', maxWidth: 420, height: '100vh', backgroundColor: 'background.default'}}>
        {history.location.pathname !== '/landing' && !accountData.me ? (
          <Box sx={{ p: 4, height: theme => theme.spacing(48), display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <SignIn refetch={reloadAndCloseDrawer} />
            <Typography sx={{textAlign: 'center', my: 1 }} variant="body2" component="div">or</Typography>
            <Link to="/landing" sx={{ textDecoration: 'none', textAlign: 'center' }}>
              <Button variant="outlined" sx={{ width: 1 }}>Sign Up</Button>
            </Link>
          </Box>
        ) : (
          <React.Fragment>
            <AccountSpaces />
            <NotificationList />
            <AccountMenuActions refetch={reloadAndCloseDrawer}/>
          </React.Fragment>
        )}
      </Box>
    </SwipeableDrawer>
  </Box>
};

export const AccountMenuSkeleton = () => <Skeleton sx={{ bgcolor: 'grey.300' }} variant="circular" width={32} height={32} />
