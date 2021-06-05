export const validateTitle = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	} else if (value.length < 2) {
		error = 'Incorect movie title';
	}
	return error;
};

export const validateReleaseYear = (value) => {
	let error;
	if (!value) {
		error = 'Required';
	} else if (value < 1900 || value > new Date().getFullYear()) {
		error = 'Year must be more than 1900 and less than current year';
	}
	return error;
};

export const validateStars = (value) => {
	let error;

	if (!value) {
		error = 'Required';
	}
	return error;
};
