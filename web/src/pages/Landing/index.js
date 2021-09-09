import React, { useContext } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import { Paper, Box, Container } from '@mui/material';
import { SignUp, SignIn, SignOut } from '../../components';
import * as landingQuery from '../../routes/__generated__/landingQuery.graphql';
import { HistoryContext } from '../../App';

export const Landing = ({ queryRef }) => {
  const history = useContext(HistoryContext);
  const [landingQueryRef, loadLandingQuery] = useQueryLoader(landingQuery, queryRef);
  const landingQueryData = usePreloadedQuery(landingQuery, landingQueryRef);
  
  if (landingQueryData.me) {
    setTimeout(() => history.push('/'),0);
    return <div/>
  } else {
    return <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 8}}>
        <Paper sx={{ p: 4, flex: 1, mx: 4 }}>
          <SignUp refetch={loadLandingQuery} />
        </Paper>
        <Paper sx={{ p: 4, flex: 1, mx: 4 }}>
          <SignIn refetch={loadLandingQuery} />
        </Paper>
      </Box>
    </Container>;
  }
  
}