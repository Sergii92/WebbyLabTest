import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSetMovies } from '../reducers/movies/hoocks/useSetMoviesFromFile';
import { useGetAllMovies } from '../reducers/movies/hoocks/getAllMovies';
import { selectMovies } from '../reducers/movies/selectors';
import { Card } from '../components/Card/Card';
import { HomeContainer, Header, Main, Aside, Section } from './styles';

export const Home = () => {
	const { setMovies } = useSetMovies();
	const { getAllMovies } = useGetAllMovies();
	const [ selectedFile, setSelectedFile ] = useState();

	useEffect(() => {
		getAllMovies();
	}, []);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		console.log(selectedFile);

		formData.append('File', selectedFile);
		setMovies(formData);
	};
	const moviesData = useSelector(selectMovies);

	return (
		<HomeContainer>
			<Header>
				{/* <div className="upload">
					<form action="/movies" enctype="multipart/form-data" method="post" />
					<input type="file" name="upload" accept="text/plain" />
					<input type="submit" value="Upload file" />
				</div> */}
				<div>
					<input type="file" name="file" onChange={changeHandler} />
					<div>
						<button onClick={handleSubmission}>Submit</button>
					</div>
				</div>
				<div className="search">
					<input type="text" placeholder="search" onChange={() => console.log('hello')} />
				</div>
			</Header>
			<Main>
				<Aside />
				<Section>{moviesData.map((movie) => <Card movie={movie} key={movie._id} />)}</Section>
			</Main>
		</HomeContainer>
	);
};
