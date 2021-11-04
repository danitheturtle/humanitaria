import React from 'react';
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
import { NestedPostTree } from '../Post/NestedPostTree';

const sortReverseChronological = (a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1);

export const PostList = ({ postList, startingIndentLevel, isChild = false }) => {
  return <List sx={{ p: 0 }}>
    { postList.sort(sortReverseChronological).map(post => {
      return <NestedPostTree key={post.id} rootPostData={post} startingIndentLevel={2} />
    }) }
  </List>
}
