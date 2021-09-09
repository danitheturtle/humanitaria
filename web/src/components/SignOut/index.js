import React from 'react';
import { graphql, useMutation } from 'react-relay';
import { Button } from '@mui/material';

export const SignOut = ({ refetch }) => {
  const [commitSignOut, isSigningOut] = useMutation(graphql `
    mutation SignOutMutation($input:signOutInput!) {
      signOut(input:$input) {
        clientMutationId
      }
    }
  `);
  const handleSignout = () => {
    commitSignOut({
      variables: {input:{}},
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' });
      }
    });
  }
  if (isSigningOut) return <div className="loading">loading</div>;
  return <Button sx={{ mt: 4, width: 1 }} variant="contained" onClick={handleSignout}>Sign Out</Button>
};
