import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSetMovies } from '../reducers/movies/hoocks/useSetMoviesFromFile';
import { useGetAllMovies } from '../reducers/movies/hoocks/getAllMovies';
import { selectMovies } from '../reducers/movies/selectors';
import { moviesActions } from '../reducers/movies/actions';
import { Card } from '../components/Card/Card';
import { HomeContainer, Header, Main, Aside, Section } from './styles';
import { ButtonBlock, CardButton } from '../components/Card/styles';
import { Search } from '../components/Search/Search';
import { Addmovie } from '../components/Addmovie/AddMovie';

export const Home = () => {
	const { setMovies } = useSetMovies();
	const { getAllMovies } = useGetAllMovies();
	const [ selectedFile, setSelectedFile ] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		getAllMovies();
	}, []);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('File', selectedFile);
		setMovies(formData);
	};

	const handlerSort = () => {
		dispatch(moviesActions.sortMovies());
	};

	const moviesData = useSelector(selectMovies);

	return (
		<HomeContainer>
			<Header>
				<div>
					<input type="file" name="file" onChange={changeHandler} />
					<div>
						<button onClick={handleSubmission}>Submit</button>
					</div>
				</div>
				<Search />
			</Header>
			<Main>
				<Aside>
					<ButtonBlock>
						<CardButton onClick={handlerSort}>Sort by name</CardButton>
						<Addmovie />
					</ButtonBlock>
				</Aside>
				<Section>{moviesData.map((movie) => <Card movie={movie} key={movie._id} />)}</Section>
			</Main>
		</HomeContainer>
	);
};
