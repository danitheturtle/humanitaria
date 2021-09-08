import React from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import { Paper, Box, Container } from '@mui/material';
import { SignUp, SignIn, SignOut } from '../../components';
import * as landingQuery from '../../routes/__generated__/landingQuery.graphql';

export const Landing = ({ queryRef }) => {
  const [landingQueryRef, loadLandingQuery] = useQueryLoader(landingQuery, queryRef);
  const landingQueryData = usePreloadedQuery(landingQuery, landingQueryRef);
  
  if (landingQueryData.me) {
    return <Container maxWidth="lg">
      <div className="id-label">{"Your uid is: "}{landingQueryData?.me?.uid}</div>
      <SignOut refetch={loadLandingQuery}/>
    </Container>
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