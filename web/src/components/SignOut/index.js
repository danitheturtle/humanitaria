import React from 'react';
import { graphql, useMutation } from 'react-relay';
import { Button, Skeleton } from '@mui/material';

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
  if (isSigningOut) return <Skeleton variant="rectangular" sx={{ backgroundColor: 'primary.main',  width: '50%'}}/>;
  return <Button sx={{ width: '50%' }} variant="contained" onClick={handleSignout}>Sign Out</Button>
};
