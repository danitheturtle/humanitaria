import React, { useState } from 'react';
import { Stack, TextField, Button, Typography, Box } from '@mui/material';
import { graphql, useMutation } from 'react-relay';

export const SignUp = ({ refetch }) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [commitSignIn, isSigningIn] = useMutation(graphql `
    mutation SignUpSignInMutation($input: signInInput!) {
      signIn(input:$input) {
        me {
          id
          uid
        }
      }
    }
  `);
  const [commitAccountCreation, isBeingCreated] = useMutation(graphql `
    mutation SignUpMutation($input: createUserInput!) {
      createUser(input:$input) {
        me {
          id,
          uid
        }
      }
    }
  `);
  const handleEditUsername = (e) => {
    setUsernameValue(e.target.value);
  }
  const handleEditEmail = (e) => {
    setEmailValue(e.target.value);
  }
  const handleEditPassword = (e) => {
    setPasswordValue(e.target.value);
  }
  const handleLogin = () => {
    commitSignIn({
      variables: {
        input: {
          usernameOrEmail: usernameValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' });
      }
    })
  };
  const handleSignup = () => {
    commitAccountCreation({
      variables: {
        input: {
          username: usernameValue,
          email: emailValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        handleLogin();
      }
    })
  }
  if (isBeingCreated || isSigningIn) return <div className="loading">loading</div>;
  
  return <Typography variant="body1" component="div" sx={{ flex: 1 }}>
    <Typography sx={{ width: 1, mb: 1 }} variant="h3" component="h1">Sign Up</Typography>
    <Stack spacing={2}>
      <TextField
        id="username"
        label="Username"
        variant="standard"
        onChange={handleEditUsername}
        value={usernameValue}
        required
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        onChange={handleEditEmail}
        value={emailValue}
        fullWidth
      />
      <TextField
        id="signupPassword"
        label="Password"
        variant="standard"
        type="password"
        onChange={handleEditPassword}
        value={passwordValue}
        required
        fullWidth
      />
    </Stack>
    <Button sx={{ mt: 4, width: 1 }} variant="contained" onClick={handleSignup}>Sign Up</Button>
  </Typography>
};
