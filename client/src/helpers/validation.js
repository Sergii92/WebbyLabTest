export const validateTitle = (value) => {
	let error;
	if (!value.trim()) {
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
	if (!value.trim()) {
		return 'Required';
	}
	if (!/^([a-zA-Z а-яА-Я їіІЇёЁ ,-]+)$/.test(value)) {
		return 'Incorect format';
	}

	const starsArray = value.split(',');
	const normalizeStarsArray = starsArray.map((star) => star.trim().toUpperCase());
	if (new Set(normalizeStarsArray).size !== normalizeStarsArray.length) {
		return 'There should be no duplicates';
	}
};
