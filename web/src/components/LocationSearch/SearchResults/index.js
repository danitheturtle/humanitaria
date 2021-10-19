import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Popper, MenuItem, MenuList, Skeleton, Paper, ClickAwayListener } from '@mui/material';
import { graphql, usePaginationFragment } from 'react-relay';

const SearchResultsPopper = ({ anchorRef, searchOpen, setSearchOpen, children }) => {
  const handleListKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setSearchOpen(false);
    } else if (e.key === 'Escape') {
      setSearchOpen(false);
    }
  }
  return <Popper open={searchOpen} anchorEl={anchorRef?.current} placement="bottom-start" disablePortal>
    <MenuList id="search-results-autocomplete" sx={{ bgcolor: 'common.white', p: 0, m: 0 }} onKeyDown={handleListKeyDown}>
      {children}
    </MenuList>
  </Popper>
};

export const SearchResultsAutocompleteSkeleton = (props) => (
  <SearchResultsPopper {...props}>
    <MenuItem sx={{ width: 500, height: 32, p: 0}}>
      <Skeleton sx={{ bgcolor: 'grey.300', width: 500, height: 32 }} variant="rectangle" animation="wave" />
    </MenuItem>
  </SearchResultsPopper>
);

const locationString = (location) => {
  let final = "";
  if (location?.address?.address) final += location.address.address + " ";
  if (location?.address?.city) final += location.address.city + ", ";
  if (location?.address?.state) final += location.address.state + ", ";
  if (location?.address?.zip) final += location.address.zip;
  return final;
}

export const SearchResultsAutocomplete = ({
  value,
  setValue,
  anchorRef,
  optionsRef,
  searchOpen,
  searchValue,
  queryData,
  options,
  setOptions,
  setSearchOpen
}) => {
  const [debounceTimerId, setDebounceTimerId] = useState(null);

  const { data, refetch, loadNext, hasNext, isLoadingNext } = usePaginationFragment(graphql `
    fragment SearchResultsAutocomplete_locations on Query
      @refetchable(queryName: "LocationSearchQuery")
      @argumentDefinitions(first: { type: "Int!" }, after: { type: "String" }, search: { type: "String" }) {
        searchLocations(first:$first,after:$after,search:$search) @connection(key: "SearchResultsAutocompleteConnection_searchLocations") {
          edges {
            node {
              id
              placeId
              address {
                address
                city
                state
                zip
              }
              lat
              lon
              boundingBox {
                x1
                y1
                x2
                y2
              }
            }
          }
        }
      }
  `, queryData);

  useEffect(() => {
    if (searchValue === '' || searchValue?.length < 3) return;
    if (debounceTimerId) {
      clearTimeout(debounceTimerId);
    }
    setDebounceTimerId(setTimeout(() => {
      refetch({ first: 5, search: searchValue });
    }, 200));
  }, [searchValue]);
  useEffect(() => {
    if (isLoadingNext) return;
    setOptions(data?.searchLocations?.edges?.map(edge => edge.node));
  }, [data?.searchLocations?.edges, isLoadingNext]);

  const handleMenuItemClick = (index) => {
    if (value?.id !== options[index].id) {
      setValue(options[index]);
    }
    setSearchOpen(false);
  }
  
  if (options.length < 1) {
    return <SearchResultsAutocompleteSkeleton searchOpen={searchOpen} setSearchOpen={setSearchOpen} anchorRef={anchorRef}/>;
  } else {
    return <SearchResultsPopper searchOpen={searchOpen} setSearchOpen={setSearchOpen} anchorRef={anchorRef}>{
      options.map((location, i) => (
        <MenuItem 
          key={location.id} 
          sx={{ width: 500, height: 32, p: 0}}
          autoFocus={i === 0}
          onClick={ () => handleMenuItemClick(i) }
        >
          {locationString(location)}
        </MenuItem>
      ))
    }</SearchResultsPopper>;
  }
};
