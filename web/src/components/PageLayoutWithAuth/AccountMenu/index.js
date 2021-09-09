import React, { useContext, useState } from 'react';
import { Box, Avatar, Skeleton, Paper, SwipeableDrawer } from '@mui/material';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { HistoryContext } from '../../../App';
import { AccountSpaces } from './AccountSpaces';
import {  SignOut} from '../../../components';
import * as PageLayoutWithAuthQuery from '../__generated__/PageLayoutWithAuthQuery.graphql';

export const AccountMenu = () => {
  const history = useContext(HistoryContext);
  const [accountDrawerOpen, setAccountDrawerOpen] = useState(false);
  const accountData = useLazyLoadQuery(graphql `
    query AccountMenuQuery {
      me {
        id
        uid
        picture
      }
    }
  `, {});
  const handleOpenAccountDrawer = () => setAccountDrawerOpen(true);
  const handleCloseAccountDrawer = () => setAccountDrawerOpen(false);

  if (history.location.pathname !== '/landing' && !accountData.me) {
    setTimeout(() => history.push('landing'), 0);
    return <Skeleton sx={{ bgcolor: 'grey.300' }} variant="circular" width={32} height={32} />;
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
      <Box sx={{ width: '100vw', maxWidth: 420, height: '100vh', backgroundColor: 'background.default'}}>
        <AccountSpaces />
        {/* <NotificationsList /> */}
        <SignOut />
      </Box>
    </SwipeableDrawer>
  </Box>
};
