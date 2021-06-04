import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSetMovies } from '../reducers/movies/hoocks/useSetMoviesFromFile';
import { useGetAllMovies } from '../reducers/movies/hoocks/getAllMovies';
import { selectMovies } from '../reducers/movies/selectors';
import { moviesActions } from '../reducers/movies/actions';
import { Card } from '../components/Card/Card';
import {
	HomeContainer,
	Header,
	Main,
	Aside,
	Section,
	LoadingWrapper,
	Logo,
	UploadForm,
	Label,
	UploadInput,
	ButtonBlock,
	UploadButton
} from './styles';
import { CardButton } from '../components/Card/styles';
import { Search } from '../components/Search/Search';
import { Addmovie } from '../components/Addmovie/AddMovie';
import { Loader } from '../components/Loader/Loader';

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
				<Logo href="/">WebbyLabTest</Logo>

				<Search />
			</Header>
			<Main>
				<Aside>
					<UploadForm onSubmit={(e) => e.preventDefault()}>
						<Label>
							Upload movies from file
							<UploadInput type="file" name="file" onChange={changeHandler} />
						</Label>
						<UploadButton onClick={handleSubmission}>Submit</UploadButton>
					</UploadForm>
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
