import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, refine }) => (
  <input
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
);


export const CustomSearchBox = connectSearchBox(SearchBox);