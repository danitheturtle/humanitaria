import React from 'react';
import { useMutation } from 'react-relay';

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
  return <div><button className="signout-button" onClick={handleSignout}>Sign Out</button></div>
};
