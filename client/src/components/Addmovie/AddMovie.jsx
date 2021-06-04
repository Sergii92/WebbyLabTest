import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';
import { useAddMovie } from '../../reducers/movies/hoocks/addMovie';
import { CardButton } from '../Card/styles';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '30%'
	}
};

export const Addmovie = () => {
	const [ modalIsOpen, setIsOpen ] = useState(false);
	const openMOdal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const { addMovie } = useAddMovie();

	return (
		<div>
			<CardButton onClick={openMOdal}>Add new movies</CardButton>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<Formik
					initialValues={{ Title: '', 'Release Year': '', Format: '', Stars: [] }}
					// validate={(values) => {
					// 	const errors = {};
					// 	if (!values.email) {
					// 		errors.email = 'Required';
					// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					// 		errors.email = 'Invalid email address';
					// 	}
					// 	return errors;
					// }}
					onSubmit={(values, { setSubmitting }) => {
						addMovie(JSON.stringify({ ...values, Stars: values.Stars.split(',') }));

						closeModal();
					}}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<div>
								<p>Title</p>
								<input
									type="text"
									name="Title"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Title}
								/>
							</div>
							<div>
								<p>Release Year</p>
								<input
									type="text"
									name="Release Year"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values['Release Year']}
								/>
							</div>
							<div>
								<p>Format</p>
								<input
									type="text"
									name="Format"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Format}
								/>
							</div>

							<div>
								<p>Stars</p>
								<input
									type="text"
									name="Stars"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.Stars}
								/>
							</div>

							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</form>
					)}
				</Formik>
				{/* <form>
					<div>
						<h2>Title: </h2>
						<input />
					</div>
					<div>
						<h3>Release Year: </h3>
						<input />
					</div>
					<div>
						<h3>Format: </h3>
						<input />
					</div>
					<div>
						<h3>Stars: </h3>
						<input />
					</div>
				</form> */}

				<button onClick={closeModal}>close</button>
			</Modal>
		</div>
	);
};
