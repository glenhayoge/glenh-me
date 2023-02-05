import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, updateQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      async function getSearchResults() {
        const response = await fetch(`/api/search?q=${query}`);
        const json = response.json();
        setSearchResults(await json);
      }
      return;
    } else {
      return;
    }
  }, [query]);

  return (
    <div>
      <input
        aria-label={'Search'}
        type="text"
        value={query}
        placeholder={'Search...'}
        onChange={(input) => updateQuery(input.target.value)}
      />
      <div>
        {query.length >= 3 && searchResults !== [] ? (
          <>
            {searchResults.map((result) => (
              <a href={result.url}>{result.title}</a>
            ))}
          </>
        ) : query.length >= 3 && searchResults == [] ? (
          <p>No results</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
