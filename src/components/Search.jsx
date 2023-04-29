import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch,SearchBox,Hits} from 'react-instantsearch-hooks-web';
import { CustomSearchBox } from './customcomponent/Searchinput';
  const searchClient = algoliasearch('Y23PP1M0JQ', '87ebb69c9bb80da0451b02f03a9b4d94');
const Search = () => {
  return (
      <InstantSearch searchClient={searchClient} indexName="products">
      <SearchBox />

      {/* <Hits  hitComponent={ProductCard}/> */}

    </InstantSearch>
  )
}

export default Search