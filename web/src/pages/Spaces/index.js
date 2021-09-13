import React from 'react';

export const Spaces = ({ queryRef, spacename }) => {
  if (spacename) return <div>{spacename}</div>
  return <div>Spaces root</div>
};