import React, { useContext } from 'react';
import { Box, Avatar, Skeleton } from '@mui/material';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { HistoryContext } from '../../../App';
import * as PageLayoutWithAuthQuery from '../__generated__/PageLayoutWithAuthQuery.graphql';

export const AccountMenu = () => {
  const history = useContext(HistoryContext);
  const accountData = useLazyLoadQuery(graphql`
    query AccountMenuQuery {
      me {
        id
        uid
        picture
      }
    }
  `, {});
  if (history.location.pathname !== '/landing' && !accountData.me) {
    setTimeout(() => history.push('landing'),0);
    return <Skeleton sx={{ bgcolor: 'grey.300' }} variant="circular" width={32} height={32} />;
  }
  return <Box>
    <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
  </Box>
};