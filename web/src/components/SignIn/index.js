import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';
import { Stack, TextField, Button, Typography } from '@mui/material';

export const SignIn = ({refetch}) => {
  const [loginNameValue, setLoginName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  const handleEditLoginName = (e) => {
    setLoginName(e?.target?.value);
  }
  const handleEditPassword = (e) => {
    setPasswordValue(e.target.value);
  }
  
  const [commitSignIn, isSigningIn] = useMutation(graphql`
    mutation SignInMutation($input: signInInput!) {
      signIn(input:$input) {
        me {
          id
          uid
        }
      }
    }
  `);
  const handleLogin = () => {
    commitSignIn({
      variables: {
        input: {
          usernameOrEmail: loginNameValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' });
      }
    })
  };
  if (isSigningIn) return <div className="loading">loading</div>;
  return <Typography variant="body1" component="div" sx={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1, height: 1 }}>
      <Typography sx={{ width: 1, mb: 1 }} variant="h3" component="h1">Sign In</Typography>
      <Stack spacing={2}>
        <TextField
          id="usernameOrEmail"
          label="Username or Email"
          variant="standard"
          onChange={handleEditLoginName}
          value={loginNameValue}
          required
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          onChange={handleEditPassword}
          value={passwordValue}
          required
          fullWidth
        />
      </Stack>
      <Button sx={{ mt: 4, width: 1, position: 'absolute', bottom: 0 }} variant="contained" onClick={handleLogin}>Sign In</Button>
  </Typography>
};