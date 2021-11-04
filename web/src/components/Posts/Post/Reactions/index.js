import React from 'react';
import { Box, Chip } from '@mui/material';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import OutletOutlinedIcon from '@mui/icons-material/OutletOutlined';
import { useTheme } from '@mui/material/styles';

const makeStyles = (theme, sx) => ({
  ReactionBox: { 
    display: 'flex', 
    flexGrow: 0, 
    height: theme.spacing(2.5), 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    '& span': {
      pr: theme.spacing(1),
      pl: theme.spacing(1.5)
    },
    '& svg': {
      ml: theme.spacing(1.5), 
      fontSize: theme.spacing(2)
    },
    ...sx 
  },
  ReactionChip: {
    height: theme.spacing(2.5), 
    mr: theme.spacing(1)
  }
});

const reactionTypeToIcon = {
  like: <ThumbUpSharpIcon />,
  love: <FavoriteSharpIcon />,
  frown: <SentimentDissatisfiedSharpIcon />,
  smile: <InsertEmoticonSharpIcon />,
  fire: <LocalFireDepartmentSharpIcon />,
  shock: <OutletOutlinedIcon />
};

export const Reactions = ({ reactions, sx = {} }) => {
  const theme = useTheme();
  const styles = makeStyles(theme, sx);
  
  const handleReactionClick = () => {
    //TODO
  }
  
  return <Box sx={styles.ReactionBox}>
    { reactions?.length ?  reactions.map(reaction => (
      <Chip 
        key={reaction.type}
        sx={styles.ReactionChip} 
        label={String(reaction.who.length)} 
        variant="outlined" 
        icon={reactionTypeToIcon[reaction.type]}
        onClick={handleReactionClick}
      />
    )) : <Chip 
      sx={styles.ReactionChip} 
      label={"0"} 
      variant="outlined" 
      icon={reactionTypeToIcon.like}
      onClick={handleReactionClick}
    /> }
  </Box>
};
