import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Popper, MenuItem, MenuList, Skeleton, Paper, ClickAwayListener } from '@mui/material';
import { graphql, usePaginationFragment } from 'react-relay';
import { useTheme } from '@mui/material/styles';
import { AddressString } from '../../../components';

const SearchResultsPopper = ({ anchorRef, searchOpen, setSearchOpen, styles, children }) => {
  const handleListKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      setSearchOpen(false);
    } else if (e.key === 'Escape') {
      anchorRef?.current?.focus();
    }
  }
  return <Popper open={searchOpen} anchorEl={anchorRef?.current} placement="bottom-start" disablePortal>
    <MenuList 
      id="search-results-autocomplete" 
      sx={styles.MenuList} 
      onKeyDown={handleListKeyDown}
    >
      {children}
    </MenuList>
  </Popper>
};

export const SearchResultsAutocompleteSkeleton = (props) => (
  <SearchResultsPopper {...props}>
    <MenuItem sx={props.styles.MenuItem}>
      <Skeleton sx={props.styles.MenuItemSkeleton} variant="rectangle" animation="wave" />
    </MenuItem>
  </SearchResultsPopper>
);

export const SearchResultsAutocomplete = ({
  value,
  styles,
  setValue,
  anchorRef,
  optionsRef,
  searchOpen,
  searchValue,
  queryData,
  options,
  setOptions,
  setSearchOpen,
  resultsRef
}) => {
  const { data, refetch, loadNext, hasNext, isLoadingNext } = usePaginationFragment(graphql `
    fragment SearchResultsAutocomplete_locations on Query
    @refetchable(queryName: "LocationSearchQuery")
    @argumentDefinitions(first: { type: "Int!" }, after: { type: "String" }, search: { type: "String" }) {
      searchLocations(first:$first,after:$after,search:$search) @connection(key: "SearchResultsAutocompleteConnection_searchLocations") {
        edges {
          node {
            id
            placeId
            lat
            lon
            category
            subCategory
            boundingBox {
              x1
              y1
              x2
              y2
            }
            ...AddressString_Address
          }
        }
      }
    }
    `, queryData);

  const [debounceTimerId, setDebounceTimerId] = useState(null);
  useEffect(() => {
    if (searchValue === '' || searchValue?.length < 3) return;
    if (debounceTimerId) {
      clearTimeout(debounceTimerId);
    }
    setDebounceTimerId(setTimeout(() => {
      refetch({ first: 10, search: searchValue });
    }, 300));
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
  
  const handleLoadMoreClick = () => {
    if (hasNext && !isLoadingNext) {
      loadNext(10);
    }
  }
  
  if (options.length < 1) {
    return <SearchResultsAutocompleteSkeleton 
      styles={styles} 
      resultsRef={resultsRef} 
      searchOpen={searchOpen} 
      setSearchOpaen={setSearchOpen} 
      anchorRef={anchorRef}
    />;
  } else {
    return <SearchResultsPopper 
        styles={styles} 
        resultsRef={resultsRef} 
        searchOpen={searchOpen} 
        setSearchOpen={setSearchOpen} 
        anchorRef={anchorRef}
      > {
        options.map((location, i) => (
          <MenuItem 
            key={location.id} 
            sx={styles.MenuItem}
            ref={i === 0 ? resultsRef : null}
            onClick={ () => handleMenuItemClick(i) }
          >
            <AddressString location={location} withTypeIcon={true} />
          </MenuItem>
        ))
      }
      { hasNext && <MenuItem sx={styles.MenuItem} disabled={isLoadingNext} onClick={handleLoadMoreClick}>
        <Typography variant='subtitle2' sx={styles.LoadMoreButton}>Load More Results</Typography>
      </MenuItem> }
    </SearchResultsPopper>;
  }
};
