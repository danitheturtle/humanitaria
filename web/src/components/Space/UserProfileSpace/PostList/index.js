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
import { SpaceName } from '../../../../components';
import { useTheme } from '@mui/material/styles';
import { timeSinceDate } from '../../../../utils'

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
//   time: '2021-09-19T19:19:59+0000'
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

export const Post = ({ post, indentLevel }) => {
  const theme = useTheme();
  const formattedDate = timeSinceDate(post.time)
  const renderReplies = (replyList) => {
    return <PostList postList={replyList} indentLevel={Math.max(0, indentLevel-1)}/>
  }
  
  return <ListItem alignItems='flex-start' sx={{ p: 0 }}>
    <ListItemAvatar sx={{m: 0}}>
      <Avatar sx={{ width: theme.spacing(6), height: theme.spacing(6) }}>H</Avatar>
    </ListItemAvatar>
    <Divider orientation="vertical" sx={{ height: `calc(100% - ${theme.spacing(12.25)})`, position: 'absolute', top: theme.spacing(7.25), left: theme.spacing(3), minHeight: theme.spacing(4), backgroundColor: 'grey.300'}}/>
    <ListItemText sx={{m: 0}}>
      <Card sx={{mb: theme.spacing(1.5)}}>
        <CardContent sx={{py: 0}}>
          <Box sx={{lineHeight: 1}}>
            <Typography variant="h5" sx={{fontWeight: 500}} component="h6">{post.owner.name}</Typography>
            {<Typography variant="body2" sx={{color: 'grey.400', position: 'absolute', top: theme.spacing(3.25), right: theme.spacing(2*indentLevel+0.5)}} component="div">
              {formattedDate}
            </Typography>}
            <SpaceName vid={post.owner.vid} sx={{ml: -0.8, mt: 0}}/>
          </Box>
          <Typography variant='body' component="div" sx={{ lineHeight: 1.4, py: theme.spacing(1), px: 1, my: -0.2, pl: 0}}>{post.content}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'flex-end', py: 0, mt: -1, px: 0, mr: theme.spacing(2*indentLevel), '&>:not(:first-of-type)': { ml: 0 } }}>
          <Button size="small" sx={{lineHeight: 1, minWidth: theme.spacing(6) }}>Like</Button>
          <Button size="small" sx={{lineHeight: 1, minWidth: theme.spacing(6) }}>Reply</Button>
        </CardActions>
        { !(post?.replyPosts?.length > 0) && <Divider sx={{width: 0.9, my: 1, ml: theme.spacing(2)}} />}
      </Card>
      { post?.replyPosts?.length > 0 && renderReplies(post.replyPosts) }
    </ListItemText>
  </ListItem>
}

export const PostList = ({postList, indentLevel, maxIndentLevel }) => {
  return <List sx={{ p: 0 }}>
    { postList.map(post => <Post key={post.id} post={post} indentLevel={indentLevel || maxIndentLevel}/>) }
  </List>
}
