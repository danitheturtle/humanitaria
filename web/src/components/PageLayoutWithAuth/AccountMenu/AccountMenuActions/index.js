import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import { SignOut } from '../../../../components';
import { HistoryContext } from '../../../../App';

export const AccountMenuActions = ({ refetch }) => {
  const history = useContext(HistoryContext);
  const navToAccountSettings = () => {
    history.push('/me/settings');
  }
  return <Box sx={{ width: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
    <Box sx={{ p: 2, width: 1, display: 'flex', flexDirection: 'row', justifyContent: 'stretch'}}>
      <SignOut refetch={ refetch }/>
      <Button variant="outlined" sx={{flex: 1}} onClick={navToAccountSettings}>Account Settings</Button>
    </Box>
  </Box>
};