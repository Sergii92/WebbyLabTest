import React, { useState, useCallback } from 'react';
import { useSearchMovies } from '../../reducers/movies/hoocks/searchMovies';
import { SearchWrapper, SearchInput, SearchButton } from './styles';

export const Search = () => {
	const [ searchParam, setSearchParam ] = useState('');
	const { searchMovies } = useSearchMovies();

	const onHandleChanche = (e) => {
		setSearchParam(e.target.value);
	};

	const onSubmit = useCallback(
		() => {
			searchMovies(searchParam);
		},
		[ searchParam, searchMovies ]
	);

	return (
		<SearchWrapper>
			<SearchInput type="text" placeholder="search" onChange={onHandleChanche} value={searchParam} />
			<SearchButton onClick={onSubmit}>Search</SearchButton>
		</SearchWrapper>
	);
};
