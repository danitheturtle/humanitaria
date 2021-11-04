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
  IconButton,
  Divider
} from '@mui/material';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { useTheme } from '@mui/material/styles';
import { SpaceName } from '../../../components';
import { timeSinceDate } from '../../../utils';
import { Reactions } from './Reactions';

// const posts = [{
//   id: 'randomPost',
//   parent: 'parentPostIdOrNull',
//   owner: { //serves as 'op'. Its the root space/user that created this post
//     vid: 'danitheturtle'
//   },
//   spacenames: ['danitheturtle', 'examples', 'humanitaria', 'markdown'],
//   content: "Markdown string (I think). Gonna have to probably design my own markdown parser"
//   media: [{
//     type: 'image',
//     source: './image/url',
//     shortDesc: 'short description of content',
//     descrption: 'longer content description. Will be shown in a modal or when the content is focused?'
//   }],
//   time: '2021-09-19T19:19:59+0000',
//   reactions: [{
//     type: 'like',
//     who: ['otterbotter', 'slamongflobo']
//   }],
//   replyPosts: [{
//     parent: 'randomPost',
//     owner: {},
//     content: '',
//     media: [],
//     time: '',
//     replyPosts: []
//   }],
//   remixOf: '',
//   remixes: [{}]
// }]

const makeStyles = (theme, indentLevel, hasChildren) => ({
  PostListItem: { p: 0 },
  PostListItemAvatar: { m: 0, height: 1 },
  PostAvatar: { 
    width: theme.spacing(6), 
    height: theme.spacing(6) 
  },
  VerticalDivider: { 
    height: `calc(100% - ${theme.spacing(hasChildren ? 9.75 : 8.25)} - ${theme.spacing(2.5)})`, 
    position: 'absolute', 
    top: theme.spacing(7.25), 
    left: theme.spacing(3), 
    minHeight: theme.spacing(4), 
    backgroundColor: 'grey.300' 
  },
  HorizontalDivider: {
    //100% - post indent from right - padding of reply button (lines up the end with the reply cta)
    width: `calc(100% - ${theme.spacing((indentLevel+1)*2.5)} + ${theme.spacing(2)})`, 
    mt: 1,
    ml: theme.spacing(-2),
    backgroundColor: 'grey.300'
  },
  PostListItemContent: {
    m: 0,
    mb: theme.spacing(1.5)
  },
  Post: {
    mb: theme.spacing(1.5),
    pr: theme.spacing((indentLevel+1)*2.5),
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',
    alignItems: 'stretch'
  },
  PostContent: { 
    py: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'flex-start',
    flex: 1
  },
  PostTitleBox: { lineHeight: 1 },
  PostOwnerName: { fontWeight: 500 },
  PostOwnerSpaceName: { 
    ml: -0.8, 
    mt: 0
  },
  PostBody: {
    lineHeight: 1.4, 
    py: theme.spacing(1), 
    px: 1, 
    my: -0.2, 
    pl: 0,
    flex: 1
  },
  PostActions: {
    p: 0,
    width: theme.spacing(6),
    overflow: 'overlay',
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    overflow: 'visible'
  },
  PostTimestamp: {
    position: 'absolute',
    top: theme.spacing(3.5),
    color: 'grey.400'
  },
  PostLikeButton: {
    mt: theme.spacing(6),
    mr: '-5px'
  },
  PostReplyButton: {
    position: 'absolute',
    lineHeight: 1, 
    minWidth: theme.spacing(6),
    height: theme.spacing(2.5),
    justifySelf: 'flex-end',
    bottom: 0,
    mr: '-5px'
  }
});

export const Post = ({ post, indentLevel, isChild, children }) => {
  const theme = useTheme();
  const styles = makeStyles(theme, indentLevel, !!children);
  const formattedDate = timeSinceDate(post.time);
  
  return <ListItem alignItems='flex-start' sx={styles.PostListItem}>
    <ListItemAvatar sx={styles.PostListItemAvatar}>
      <Avatar sx={styles.PostAvatar}>H</Avatar>
      <Divider orientation="vertical" sx={styles.VerticalDivider}/>
    </ListItemAvatar>
    <ListItemText sx={styles.PostListItemContent}>
      <Box sx={styles.Post}>
        <Box sx={styles.PostContent}>
          <Typography variant="h5" sx={styles.PostOwnerName} component="h6">{post.owner.name}</Typography>
          <SpaceName vid={post.owner.vid} sx={styles.PostOwnerSpaceName}/>
          <Typography variant='body' component="div" sx={styles.PostBody}>{post.content}</Typography>
          <Reactions reactions={post.reactions} />
        </Box>
        <Box sx={styles.PostActions}>
          <Typography variant="body2" sx={styles.PostTimestamp} component="div">
            {formattedDate}
          </Typography>
          <IconButton size="small" sx={styles.PostLikeButton}><AddReactionOutlinedIcon/></IconButton>
          <Button size="small" sx={styles.PostReplyButton}>Reply</Button>
        </Box>
      </Box>
      { isChild && !(post?.replyPosts?.length > 0) && <Divider sx={styles.HorizontalDivider} />}
      { children }
    </ListItemText>
  </ListItem>
}