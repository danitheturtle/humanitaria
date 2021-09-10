import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { HistoryContext } from '../../App';

export const SpaceName = ({ id, sx = {} }) => {
  const history = useContext(HistoryContext);
  return <Button
    variant="text"
    size="small"
    color="secondary"
    onClick={(e) => { e.stopPropagation(); history.push(`/${id}`) }} 
    sx={{ 
      py: 0,
      px: 0.3,
      mx: 0.1,
      mt: -0.4,
      borderRadius: 4, 
      '&:hover,&:focus': { 
        backgroundColor: 'secondary.main'
      },
      ...sx
  }}>
    <Typography 
      component="span" 
      variant="body2" 
      color="secondary.contrastText"
      sx={{ textTransform: 'none'}}
    > {`~${id}`} </Typography>
  </Button>
};

export const renderTextWithSpaceId = (text) => {
  const spaceNameRegex = new RegExp(/(?:^|\s)~+([a-z]|[A-Z]|[0-9]|\.|_|-){5,}(\s|$)/, "gm");
  const matchedSpaceNames = text?.match(spaceNameRegex);
  const resultingElements = [];
  if (matchedSpaceNames) {
    let lastIndex = 0;
    matchedSpaceNames.forEach((name, i) => {
      const nameIndex = text.indexOf(name);
      const beforeName = text.slice(lastIndex, nameIndex);
      resultingElements.push(<span key={i}>{beforeName}</span>);
      resultingElements.push(<SpaceName key={name} id={name.trim().split('~')[1]}/>);
      lastIndex = nameIndex + name.length;
    });
    if (lastIndex < text.length - 1) {
      resultingElements.push(<span key={2000}>{text.slice(lastIndex, text.length-1)}</span>);
    }
    return resultingElements;
  } else {
    return text;
  }
}
