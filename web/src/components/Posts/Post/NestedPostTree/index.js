import React from 'react';
import { List } from '@mui/material';
import { Post } from '../';

export const NestedPostTree = ({ rootPostData, startingIndentLevel, maxReplies, isChild = false }) => {
  return <Post post={rootPostData} isChild={isChild} indentLevel={startingIndentLevel}>
    { rootPostData?.replyPosts?.length > 0 && <List sx={{ p: 0 }}>
      { rootPostData.replyPosts.map(replyPost => (
        <NestedPostTree 
          key={replyPost.id} 
          rootPostData={replyPost} 
          isChild={true} 
          startingIndentLevel={Math.max(startingIndentLevel - 1, 0)} 
        /> 
      )) }
    </List> }
  </Post>
};