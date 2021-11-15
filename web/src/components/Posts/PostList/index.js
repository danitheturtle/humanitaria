import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  Avatar,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider
} from '@mui/material';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { NestedPostTree } from '../Post/NestedPostTree';

const sortReverseChronological = (a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1);

export const PostList = ({ postList, startingIndentLevel, compactAfterNumReplies }) => {
  const [focusedPost, setFocusedPost] = useState(null);
  const handleBackClick = () => {
    setFocusedPost(null);
  }
  return <List sx={{ p: 0 }}>
    { focusedPost && <>
      <ListItem>
        <Button onClick={handleBackClick} type="text" startIcon={<ArrowBackIosNewSharpIcon />} color="primary">
          Back
        </Button>
      </ListItem>
      <NestedPostTree 
        isLastChild={false}
        rootPostData={focusedPost} 
        setFocusedPost={setFocusedPost}
        compactAfterNumReplies={compactAfterNumReplies} 
        startingIndentLevel={2}
      />
    </>}
    { !focusedPost && postList.sort(sortReverseChronological).map(post => {
      return <NestedPostTree 
        key={post.id} 
        isLastChild={false}
        rootPostData={post} 
        setFocusedPost={setFocusedPost}
        compactAfterNumReplies={compactAfterNumReplies} 
        startingIndentLevel={2}
      />
    }) }
  </List>
}
