import React, { useState } from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';
import { useAddMovie } from '../../reducers/movies/hoocks/addMovie';
import { CardButton } from '../Card/styles';
import { AddForm, FormInput } from './styels';
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
		<React.Fragment>
			<CardButton onClick={openMOdal}>Add new movies</CardButton>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<Formik
					initialValues={{ Title: '', 'Release Year': '', Format: '', Stars: '' }}
					onSubmit={(values, { setSubmitting }) => {
						addMovie(JSON.stringify({ ...values, Stars: values.Stars.split(',') }));
						closeModal();
					}}
				>
					{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
						<AddForm onSubmit={handleSubmit}>
							<FormInput
								type="text"
								name="Title"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.Title}
								placeholder="Title"
							/>

							<FormInput
								type="number"
								name="Release Year"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values['Release Year']}
								placeholder="Release Year"
							/>
							<FormInput
								as="select"
								name="Format"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.Format}
							>
								<option value="DVD">DVD</option>
								<option value="VHS">VHS</option>
								<option value="Blu-Ray">Blu-Ray</option>
							</FormInput>

							<FormInput
								type="text"
								name="Stars"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.Stars}
								placeholder="Stars"
							/>

							<CardButton type="submit" disabled={isSubmitting}>
								Submit
							</CardButton>
						</AddForm>
					)}
				</Formik>
			</Modal>
		</React.Fragment>
	);
};
