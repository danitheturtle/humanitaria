import React from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import Container from '@mui/material/Container';
import { Link, SignUp, SignIn, SignOut } from '../../components';
import * as landingQuery from '../../routes/__generated__/landingQuery.graphql';

export const Landing = ({ queryRef }) => {
  const [landingQueryRef, loadLandingQuery] = useQueryLoader(landingQuery, queryRef);
  const landingQueryData = usePreloadedQuery(landingQuery, landingQueryRef);
  
  if (landingQueryData.me) {
    return <Container maxWidth="lg">
      <Link to="/">Home</Link>
      <div className="id-label">{"Your uid is: "}{landingQueryData?.me?.uid}</div>
      <SignOut refetch={loadLandingQuery}/>
    </Container>
  } else {
    return <Container maxWidth="lg">
      <Link to="/">Home</Link>
      <SignUp refetch={loadLandingQuery} />
      <br/><br/><br/><br/>
      <SignIn refetch={loadLandingQuery} />
    </Container>;
  }
  
}