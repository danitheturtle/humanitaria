import React, { useState, useRef, useEffect } from 'react';
import { Box, Tabs, Tab, TabPanel, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PostChannel } from './PostChannel';
import { PostList } from './PostList';

export const defaultTabInfo = [
  { index: 0, name: 'Channels', component: PostChannel },
  { index: 1, name: 'Posts', component: PostList },
  { index: 2, name: 'Ideas', component: <Box> Not implemented yet </Box> },
];

const makeStyles = theme => ({
  Posts: {
    height: 1,
    flex: 1,
    position: 'relative',
    display: 'grid',
    gridGap: 0,
    gridTemplateColumns: '100%',
    gridTemplateRows: `${theme.spacing(6)} auto`
  }, 
  TabsBox: {
    backgroundColor: theme.palette.common.white,
    zIndex: 1,
    gridRow: '1 / span 1',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    [theme.breakpoints.up('xl')]: {
      mt: -0.1,
    }
  },
  TabContentBox: {
    py: theme.spacing(1),
    gridRow: '2 / span 1',
    overflowY: 'auto',
    overflowX: 'hidden',
    [theme.breakpoints.up('xl')]: {
      pr: theme.spacing(2)
    }
  }
});

export const Posts = ({ data, tabInfo, startingIndentLevel, compactAfterNumReplies }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const scrollContainerRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabInfo[0]);
  
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    if (currentTab.name === 'Channels') {
      window.requestAnimationFrame(() => {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      });
    }
  }, [scrollContainerRef.current, currentTab.index])
  
  const handleChange = (event, nextIndex) => {
    setCurrentTab(tabInfo[nextIndex]);
  }
  
  return <Box sx={styles.Posts}>
    <Box sx={styles.TabsBox}>
      <Tabs value={currentTab.index} onChange={handleChange} textColor="primary" indicatorColor="primary">
        {tabInfo.map(tab => (<Tab key={`${tab.name}-tab`} label={tab.name} />))}
      </Tabs>
    </Box>
    <Box sx={styles.TabContentBox} ref={scrollContainerRef}>
      { React[typeof currentTab.component === 'function' ? 'createElement' : 'cloneElement'](
        currentTab.component,
        {
          key: currentTab.name,
          postList: data,
          startingIndentLevel: startingIndentLevel,
          compactAfterNumReplies: compactAfterNumReplies
        }
      ) }
    </Box>
  </Box>
};
