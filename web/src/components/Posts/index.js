import React, { useState } from 'react';
import { Box, Tabs, Tab, TabPanel, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PostChannel } from './PostChannel';
import { PostList } from './PostList';

const makeStyles = theme => ({
  TabsBox: {
    width: 1,
    backgroundColor: theme.palette.common.white,
    zIndex: 1,
    [theme.breakpoints.up('xl')]: {
      pl: theme.spacing(4),
      position: 'fixed',
      mt: -0.1,
    }
  },
  TabContentBox: {
    my: theme.spacing(2),
    [theme.breakpoints.up('xl')]: {
      pl: theme.spacing(4),
      my: theme.spacing(8),
    }
  },
  MobileDivider: {
    backgroundColor: 'primary.main',
    flex: 0,
    p: 0,
    mb: 2,
    mr: 3,
    [theme.breakpoints.up('xl')]: {
      height: 0,
      mb: 0,
      opacity: 0
    }
  }
});

export const Posts = ({ postList, withPosts, withChannels, withIdeas }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event, nextIndex) => {
    setTabIndex(nextIndex);
  }
  return <>
    <Divider sx={styles.MobileDivider} />
    <Box sx={styles.TabsBox}>
      <Tabs value={tabIndex} onChange={handleChange} textColor="primary" indicatorColor="primary">
        <Tab label="Channels" />
        <Tab label="Posts" />
        <Tab label="Ideas" />
      </Tabs>
    </Box>
    <Box sx={styles.TabContentBox}>
      { tabIndex === 0 && <PostChannel postList={postList} startingIndentLevel={1} compactAfterNumReplies={1} /> }
      { tabIndex === 1 && <PostList postList={postList} startingIndentLevel={2} /> }
      { tabIndex === 2 && <Box> Not implemented yet </Box> }
    </Box>
  </>
};
