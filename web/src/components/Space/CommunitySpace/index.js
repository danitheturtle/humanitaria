import React, { useRef, useEffect, useState } from 'react';
import { Box, Avatar, Button, Divider, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SpaceName } from '../../../components';
import { ProfileDescription } from '../ProfileDescription';
import { Feature } from '../Feature';
import { Posts, defaultTabInfo } from '../../Posts';
import { CommunityMembersByRole } from './CommunityMembersByRole';
import { CommunityStats } from './CommunityStats';
import { postList } from '../../../utils/mockData';

const makeStyles = theme => ({
  Community: {
    flexGrow: 1,
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: `${theme.spacing(24)} auto 17.5%`,
    gridTemplateRows: `${theme.spacing(24)} ${theme.spacing(4)} ${theme.spacing(36)} auto`,
    gridGap: theme.spacing(3),
    width: 1,
    pt: 3,
    pl: 3,
    maxHeight: `calc(100vh - ${theme.spacing(8)})`,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('xl')]: {
      overflow: 'hidden',
      pt: 8,
      pl: 8,
      gridGap: theme.spacing(4),
      gridTemplateColumns: `${theme.spacing(28)} auto 17.5% 17.5%`,
      gridTemplateRows: `${theme.spacing(28)} ${theme.spacing(4)} calc(100vh - ${theme.spacing(56)})`,
    }
  },
  DescriptionBox: {
    position: 'relative',
    gridColumn: 'span 2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    pr: 3,
    [theme.breakpoints.up('xl')]: {
      gridColumn: 'span 1',
      pr: 0
    }
  },
  CommunityFeatureBox: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 2',
    mr: 3,
    [theme.breakpoints.up('xl')]: {
      gridColumn: '3 / span 2',
      gridRow: '1 / span 2'
    }
  },
  MobileDivider: {
    backgroundColor: 'primary.main',
    flex: 0,
    p: 0,
    mb: 2,
    [theme.breakpoints.up('xl')]: {
      height: 0,
      mb: 0,
      opacity: 0
    }
  },
  ConversationsBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gridColumn: "span 3", 
    gridRow: "4 / span 1", 
    mt: 0,
    pr: theme.spacing(3),
    [theme.breakpoints.up('xl')]: { 
      mt: -2.75,
      pl: theme.spacing(4),
      pr: 0,
      gridColumn: '2 / span 3', 
      gridRow: '3 / span 1'
    }
  },
  MembersSidebarBox: {
    gridColumn: '1', 
    gridRow: '3 / span 1',
    mt: 0,
    [theme.breakpoints.up('xl')]: { 
      mt: -1.75,
      gridRow: '3 / span 1'
    }
  },
  StatsBox: {
    gridColumn: '1 / span 3',
    gridRow: '2 / span 1',
    mr: 3,
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    pb: 4,
    [theme.breakpoints.up('xl')]: { 
      gridColumn: '1 / span 2',
      mr: 0
    },
    borderBottom: `1px solid ${theme.palette.primary.main}`
  }
});

export const CommunitySpace = ({ data }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  
  return <Box sx={styles.Community}>
    <Box gridColumn="span 1">
      <Avatar sx={{ width: 1, height: 1, fontSize: 64 }}>H</Avatar>
    </Box> 
    <Box id="DescriptionBox" sx={styles.DescriptionBox}>
      <ProfileDescription profile={data} withDivider={false} />
    </Box>
    <Box id="StatsBox" sx={styles.StatsBox}>
      <CommunityStats data={data} />
    </Box>
    <Stack id="MembersSidebarBox" sx={styles.MembersSidebarBox}>
      <CommunityMembersByRole data={data} />
    </Stack>
    <Box id="CommunityFeatureBox" sx={styles.CommunityFeatureBox}>
      <Feature data={data?.feature} />
    </Box>
    <Box id="ConversationsBox" sx={styles.ConversationsBox}>
      <Divider sx={styles.MobileDivider} />
      <Posts tabInfo={defaultTabInfo} data={postList} startingIndentLevel={2} compactAfterNumReplies={4} />
    </Box>
  </Box>
};
