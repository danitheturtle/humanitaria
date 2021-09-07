import React from 'react';
import MuiLink from '@mui/material/Link';
import { HistoryContext } from '../../App';

export const Link = ({ to, href, onClick, children, ...props }) => {
  const history = React.useContext(HistoryContext);
  if (href) {
    return <MuiLink href={ href } { ...props } >{ children }</MuiLink>
  } else {
    const handleClick = (e) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;
      if (!props.target) {
        e.preventDefault();
        history.push(to);
      }
    }
    return (
      <MuiLink 
        { ...props }
        onClick={handleClick} 
        href={ !props.target ? "" : `${location.origin}${to}` }
      >
        { children }
      </MuiLink>
    );
  }
}