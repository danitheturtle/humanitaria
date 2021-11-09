import React from 'react';
import { Box, Avatar, Button, Divider, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SpaceName } from '../../../components';
import { ProfileDescription } from '../ProfileDescription';
import { Feature } from '../Feature';
import { PostChannel } from '../../Posts/PostChannel';
import { CommunityMembersByRole } from './CommunityMembersByRole';
import { CommunityStats } from './CommunityStats';

const makeStyles = theme => ({
  Community: {
    flexGrow: 1,
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: `${theme.spacing(24)} auto 17.5%`,
    gridTemplateRows: `${theme.spacing(24)} ${theme.spacing(3)} ${theme.spacing(36)} auto`,
    gridGap: theme.spacing(3),
    pt: 8,
    pl: 8,
    width: 1,
    overflowX: 'hidden',
    overflowY: 'scroll',
    [theme.breakpoints.up('xl')]: {
      overflow: 'hidden',
      gridGap: theme.spacing(4),
      gridTemplateColumns: `${theme.spacing(28)} auto 17.5% 17.5%`,
      gridTemplateRows: `${theme.spacing(28)} ${theme.spacing(3)} auto`,
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
    },
    border: '1px solid black'
  },
  ConversationsBox: {
    gridColumn: "span 3", 
    gridRow: "4 / span 1", 
    [theme.breakpoints.up('xl')]: { 
      gridColumn: '2 / span 3', 
      gridRow: '3 / span 1',
      overflowX: 'hidden',
      overflowY: 'scroll',
    } ,
    border: '1px solid black'
  },
  MembersSidebarBox: {
    gridColumn: '1', 
    gridRow: '3 / span 1',
    [theme.breakpoints.up('xl')]: { 
      gridRow: '3 / span 1'
    },
    border: '1px solid black'
  },
  StatsBox: {
    gridColumn: '1 / span 3',
    gridRow: '2 / span 1',
    border: '1px solid black',
    mr: 3,
    [theme.breakpoints.up('xl')]: { 
      gridColumn: '1 / span 2',
      mr: 0
    },
  }
});
const postList = [{
  id: 1,
  owner: {
    name: 'Dani',
    vid: 'danitheturtle'
  },
  time: '2021-09-21T04:00:00.000Z',
  content: 'matrix overriding invoice Accountability Investor Savings flexibility Markets Borders ROI Iowa New Grocery copy Handmade Home Tasty Azerbaijan seamless'
}, {
  id: 2,
  owner: {
    name: 'Dani',
    vid: 'danitheturtle'
  },
  time: '2021-09-19T19:19:59.000Z',
  content: 'Granite Squares Denar Games index RAM transmitter zero Self-enabling SMTP PNG innovate Accounts Practical Creative deposit bypassing Buckinghamshire Intranet Graniteth',
  replyPosts: [{
    id: 5,
    parent: 2,
    owner: {
      name: 'Alex',
      vid: 'slamongflobo'
    },
    time: '2021-09-19T19:19:59.000Z',
    content: 'hahahaha, thats fun',
    replyPosts: [{
      id: 6,
      parent: 5,
      owner: {
        name: 'Dani',
        vid: 'danitheturtle'
      },
      time: '2021-09-15T19:19:59.000Z',
      content: 'I know right?!'
    }]
  }, {
    id: 7,
    parent: 2,
    owner: {
      name: 'Meghan',
      vid: 'otterbotter'
    },
    time: '2021-09-19T19:19:59.000Z',
    content: 'The pancakes are infinite and so is my slap'
  }]
}, {
  id: 3,
  owner: {
    name: 'Dani',
    vid: 'danitheturtle'
  },
  time: '2021-09-19T19:19:59.000Z',
  content: 'this is a test3'
}, {
  id: 4,
  owner: {
    name: 'Dani',
    vid: 'danitheturtle'
  },
  time: '2021-09-19T19:19:59.000Z',
  content: 'this is a test4'
}]

export const CommunitySpace = ({ data }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return <Box sx={styles.Community}>
    <Box gridColumn="span 1">
      <Avatar sx={{ width: 1, height: 1, fontSize: 64 }}>H</Avatar>
    </Box> 
    <Box id="DescriptionBox" sx={styles.DescriptionBox}>
      <ProfileDescription profile={data} />
    </Box>
    <Box id="StatsBox" sx={styles.StatsBox}>
      <CommunityStats data={data} />
    </Box>
    <Stack id="MembersSidebarBox" sx={styles.MembersSidebarBox}>
      <CommunityMembersByRole sx={{}} />
    </Stack>
    <Box id="CommunityFeatureBox" sx={styles.CommunityFeatureBox}>
      <Feature data={data?.feature} />
    </Box>
    <Box id="ConversationsBox" sx={styles.ConversationsBox}>
      <PostChannel postList={postList} maxIndentLevel={3} />
    </Box>
  </Box>
};
