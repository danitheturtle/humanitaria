import React, { useContext } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import { Stack, Avatar, Divider, IconButton, Button, Container, Typography, TextField } from '@mui/material';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import * as accountSettingsQuery from '../../routes/__generated__/accountSettingsQuery.graphql';
import { HistoryContext } from '../../App';
import { useAuthOnly } from '../../hooks';

export const AccountSettings = ({ queryRef }) => {
  useAuthOnly();
  const history = useContext(HistoryContext);
  const [accountQueryRef, loadLandingQuery] = useQueryLoader(accountSettingsQuery, queryRef);
  const accountQueryData = usePreloadedQuery(accountSettingsQuery, accountQueryRef);
  
  return <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h4" component="h1" sx={{ mt: 10, mb: 4, ml: 12, width: 1, maxWidth: 480}}>Account Settings</Typography>
    <Stack direction="row" spacing={4} sx={{ width: 1, maxWidth: 480}}>
      <IconButton sx={{ height: 128, width: 128, position: 'relative' }}>
        <UploadFileSharpIcon sx={{ zIndex: 1, width: 48, height: 48, position: 'absolute' }}/>
        <Avatar sx={{ fontSize: 64, height: 128, width: 128, position: 'absolute' }}>H</Avatar>
      </IconButton>
      <Stack spacing={3} sx={{ flexGrow: 1 }}>
        <TextField
          id="username"
          label="Username"
          variant="standard"
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
        />
        <TextField
          id="name"
          label="Display Name"
          variant="standard"
          fullWidth
        />
        <TextField
          id="newPassword"
          label="New Password"
          variant="standard"
          type="password"
        />
        <TextField
          id="newPasswordConfirm"
          label="Confirm New Password"
          variant="standard"
          type="password"
        />
        <TextField
          id="confirmPassword"
          label="Verify Password"
          variant="standard"
          type="password"
          required
        />
        <Button variant="contained">Save Settings</Button>
      </Stack>
    </Stack>
  </Container>;
}