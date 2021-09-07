import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
    if (e?.target?.value) {
      setUsernameValue(e.target.value);
    }
  }
  const handleEditEmail = (e) => {
    if (e?.target?.value) {
      setEmailValue(e.target.value);
    }
  }
  const handleEditPassword = (e) => {
    if (e?.target?.value) {
      setPasswordValue(e.target.value);
    }
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
  
  return <Box sx={{}}>
    <Typography variant="h3" component="h1">Humanitaria Sign Up</Typography>
    <Typography variant="body1" component="div">
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        onChange={handleEditUsername}
        value={usernameValue}
        required
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        onChange={handleEditEmail}
        value={emailValue}
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        onChange={handleEditPassword}
        value={passwordValue}
        required
        fullWidth
      />
    </Typography>
    <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
  </Box>
};
