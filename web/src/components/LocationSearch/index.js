import React, { useRef, useState, Suspense } from 'react';
import { Autocomplete, TextField, Typography, Box, ClickAwayListener } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { graphql, usePaginationFragment } from 'react-relay';
import { SearchResultsAutocomplete, SearchResultsAutocompleteSkeleton } from './SearchResults';

const makeStyles = (theme, searchOpen, sx = {}) => ({
  SearchWrapper: {
    mt: 4, 
    width: theme.spacing(64), 
    bgcolor: 'common.white', 
    '& div, & input': { 
      zIndex: 1005
    },
    ...sx
  },
  SearchInput: {
    width: theme.spacing(64), 
    position: 'relative', 
    bgcolor: 'common.white',
    border: searchOpen ? `1px solid ${theme.palette.primary.main}` :`1px solid ${theme.palette.grey[500]}`,
    '& div:before': { 
      borderBottom: searchOpen ? `1px solid ${theme.palette.primary.main}` : 'none'
    },
    '& div:after': { borderBottom: 'none' },
    '& div:hover:not(.Mui-disabled):before': { 
      borderBottom: searchOpen ? `1px solid ${theme.palette.primary.main}` : 'none'
    }
  },
  MenuList: {
    bgcolor: theme.palette.common.white, 
    p: 0, 
    m: 0, 
    maxHeight: theme.spacing(72),
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  MenuItem: {
    width: theme.spacing(64),
    overflowX: 'hidden',
    overflowY: 'auto',
    p: 0
  },
  MenuItemSkeleton: { 
    bgcolor: theme.palette.grey[300], 
    width: theme.spacing(64), 
    height: theme.spacing(4) 
  },
  LoadMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: theme.palette.secondary.contrastText,
    width: 1,
    height: theme.spacing(6)  
  }
});

export const LocationSearch = (props) => {
  const theme = useTheme();
  const [options, setOptions] = useState([]);
  const anchorRef = useRef(null);
  const resultsRef = useRef(null);
  const [inputValue, setInputValue] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const styles = makeStyles(theme, searchOpen, props.sx);
  
  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (resultsRef.current && (e.key === 'Enter' || e.key === 'ArrowDown')) {
      resultsRef.current.focus();
    } else if (e.key === 'Escape') {
      setSearchOpen(false);
      anchorRef?.current?.blur()
    } else if (e.key === 'Tab') {
      setSearchOpen(false);
    }
  }
  
  return <ClickAwayListener onClickAway={ () => setSearchOpen(false) }>
    <Box sx={styles.SearchWrapper}>
      <TextField 
        variant="filled"
        sx={styles.SearchInput} 
        label="Find a location"
        inputProps={{
          onChange: handleTextChange,
          onFocus: () => setSearchOpen(true),
          onKeyDown: handleKeyDown
        }}
        type="text"
        inputRef={anchorRef}
      />
      <Suspense fallback={<SearchResultsAutocompleteSkeleton styles={styles} resultsRef={resultsRef} searchOpen={searchOpen} setSearchOpen={setSearchOpen} anchorRef={anchorRef}/>}>
        <SearchResultsAutocomplete 
          { ...props }
          styles={styles}
          anchorRef={anchorRef}
          resultsRef={resultsRef}
          options={options}
          setOptions={setOptions}
          searchValue={inputValue}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          onFocus={() => setSearchOpen(true)}
        />
      </Suspense>
    </Box>
  </ClickAwayListener>;
};