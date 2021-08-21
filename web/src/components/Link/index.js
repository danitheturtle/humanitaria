import React from 'react';
import { HistoryContext } from '../../App';

export const Link = ({ to, href, onClick, children, ...props }) => {
  const history = React.useContext(HistoryContext);
  if (href) {
    return <a className="Link" href={ href } { ...props } >{ children }</a>
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
      <a { ...props }
        className="Link" 
        onClick={handleClick} 
        href={ !props.target ? "" : `${location.origin}${to}` }
      >
        { children }
      </a>
    );
  }
}