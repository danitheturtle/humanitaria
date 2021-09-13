import React, { useContext } from 'react';
import {
  ListItemButton,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { HistoryContext } from '../../../App';
import { SpaceName } from '../../../components';

export const SpaceListItem = ({
  selected,
  height,
  path,
  avatar,
  primary,
  secondary,
  secondaryActionText,
  secondaryActionColor,
  secondaryActionIcon,
  onClick,
  onSecondaryAction
}) => {
  const history = useContext(HistoryContext);
  return <ListItemButton 
    selected={ selected } 
    color="secondary"
    disableRipple
    component="li"
    sx={{ 
      p: 1, pl: 2,
      height: theme => theme.spacing(height), '&:hover,&:focus': { backgroundColor: 'secondary.main' } }}
    onClick={ e => {
      onClick && onClick(e);
      history.push(path);
    }}
  >
    <ListItemAvatar sx={{ display: 'flex', width: 48, height: 48, pr: 2, justifyContent: 'center', alignItems: 'center' }}>
      {avatar}
    </ListItemAvatar>
    <ListItemText
      sx={{ pr: 4, lineHeight: 1.1, '& span': { lineHeight: 1.1 }}}
      primary={primary}
      secondary={secondary}
    />
    { secondaryActionIcon && <ListItemSecondaryAction>
      <Tooltip title={secondaryActionText}>
        <IconButton onClick={onSecondaryAction} color={secondaryActionColor} edge="end">
          {secondaryActionIcon}
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>}
  </ListItemButton>
};

export const SpaceListItemDescription = ({ space }) => (<React.Fragment>
  <SpaceName id={space.vid} sx={{ ml: -0.8 }}/>
  <Typography variant="subtitle2" component="span" sx={{ display: 'block' }}>{space.descriptionShort}</Typography>
</React.Fragment>);
