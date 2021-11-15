import React, { useState, useEffect } from 'react';
import { Box, Button, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { Post } from '../';

const makeStyles = theme => ({
  LoadMore: {
    pl: theme.spacing(1.5), 
    mt: theme.spacing(1),
    display: 'flex', 
    alignItems: 'center'
  },
  LoadMoreButton: {
    py: 0,
    // my: theme.spacing(0.5)
  },
  SubList: {
    p: 0
  }
})

export const NestedPostTree = ({ rootPostData, startingIndentLevel, setFocusedPost, compactAfterNumReplies, isLastChild = false }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [renderedPostList, setRenderedPostList] = useState([]);
  const [firstRenderedIndex, setFirstRenderedIndex] = useState(0);
  const [repliesOpened, setRepliesOpened] = useState(false);
  
  useEffect(() => {
    if (rootPostData?.replyPosts) {
      const len = rootPostData.replyPosts.length;
      const startIndex = Math.max(len - compactAfterNumReplies);
      setRenderedPostList(rootPostData.replyPosts.slice(startIndex, len));
      setFirstRenderedIndex(startIndex);
    }
  }, [rootPostData, compactAfterNumReplies]);
  
  const handleLoadMoreClick = () => {
    const len = rootPostData.replyPosts.length;
    const newStartIndex = Math.max((firstRenderedIndex - compactAfterNumReplies), 0);
    setRenderedPostList(rootPostData.replyPosts.slice(newStartIndex, len));
    setFirstRenderedIndex(newStartIndex);
  }
  return <Post 
    post={rootPostData} 
    isLastChild={isLastChild} 
    indentLevel={startingIndentLevel}
    setFocusedPost={setFocusedPost}
  >
    { rootPostData?.replyPosts?.length > renderedPostList.length && (
      <Box sx={styles.LoadMore}>
        <Button sx={styles.LoadMoreButton} onClick={handleLoadMoreClick} startIcon={<MoreVertSharpIcon fontSize="medium"/>} color="primary" type="text">
          Load Previous Replies
        </Button>
      </Box>
    )}
    { renderedPostList.length > 0 && <List sx={styles.SubList}>
      { renderedPostList.map((replyPost, i) => (
        <NestedPostTree 
          key={replyPost.id} 
          rootPostData={replyPost} 
          isLastChild={i === renderedPostList.length - 1} 
          startingIndentLevel={Math.max(startingIndentLevel - 1, 0)} 
          setFocusedPost={setFocusedPost}
        /> 
      )) }
    </List> }
  </Post>
};