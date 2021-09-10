import React, { useEffect, useContext, useState, useMemo } from 'react';
import { Box, Avatar, Skeleton, Paper, SwipeableDrawer } from '@mui/material';
import { graphql, useQueryLoader, usePreloadedQuery, useRelayEnvironment, loadQuery } from 'react-relay';
import { HistoryContext } from '../../../App';
import { AccountSpaces } from './AccountSpaces';
import { NotificationList } from '../../../components';
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
    `, {}, { fetchPolicy: 'store-or-network'});
  }, []);
  const [queryRef, reloadQuery] = useQueryLoader(AccountMenuQuery, initialQueryRef);
  const accountData = usePreloadedQuery(AccountMenuQuery, queryRef);
  const handleOpenAccountDrawer = () => setAccountDrawerOpen(true);
  const handleCloseAccountDrawer = () => setAccountDrawerOpen(false);
  const reloadAndCloseDrawer = (...reloadArgs) => {
    reloadQuery(...reloadArgs);
    setAccountDrawerOpen(false);
  }
  if (history.location.pathname !== '/landing' && !accountData.me) {
    setTimeout(() => history.push('/landing'), 0);
    return <AccountMenuSkeleton />;
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
        <AccountSpaces />
        <NotificationList />
        <AccountMenuActions refetch={reloadAndCloseDrawer}/>
      </Box>
    </SwipeableDrawer>
  </Box>
};

export const AccountMenuSkeleton = () => <Skeleton sx={{ bgcolor: 'grey.300' }} variant="circular" width={32} height={32} />
