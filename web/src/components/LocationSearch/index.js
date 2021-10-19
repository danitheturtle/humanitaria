import React, { useRef, useState, Suspense } from 'react';
import { Autocomplete, TextField, Typography, Box, ClickAwayListener } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { graphql, usePaginationFragment } from 'react-relay';
import { SearchResultsAutocomplete, SearchResultsAutocompleteSkeleton } from './SearchResults';

export const LocationSearch = ({ value, setValue, queryData }) => {
  const theme = useTheme();
  const [options, setOptions] = useState([]);
  const anchorRef = useRef(null);
  const [inputValue, setInputValue] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  }
  
  return <ClickAwayListener onClickAway={ () => setSearchOpen(false) }>
    <Box sx={{ mt: 4, width: 500, bgcolor: 'common.white', '& div, & input': { zIndex: 1005 }}}>
      <TextField 
        variant="filled"
        sx={{ width: 500, position: 'relative', bgcolor: 'common.white' }} 
        label="Find a location"
        inputProps={{
          onChange: handleTextChange,
          onFocus: () => setSearchOpen(true)
        }}
        type="text"
        inputRef={anchorRef}
      />
      <Suspense fallback={<SearchResultsAutocompleteSkeleton searchOpen={searchOpen} setSearchOpen={setSearchOpen} anchorRef={anchorRef}/>}>
        <SearchResultsAutocomplete 
          value={value}
          setValue={setValue}
          options={options}
          setOptions={setOptions}
          queryData={queryData} 
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          anchorRef={anchorRef}
          onFocus={() => setSearchOpen(true)}
          searchValue={inputValue}
        />
      </Suspense>
    </Box>
  </ClickAwayListener>;
};