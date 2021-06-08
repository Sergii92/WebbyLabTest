const querystring = require('querystring');

function parse(str) {
	let arr = [];
	let obj = {};

	str.split('\n').forEach((line) => {
		if (
			line.startsWith('Title: ') ||
			line.startsWith('Release Year: ') ||
			line.startsWith('Format: ') ||
			line.startsWith('Stars: ')
		) {
			const keyValue = querystring.parse(line, '\r', ': ');
			const key = Object.keys(keyValue)[0];
			const value = keyValue[key];

			if (line.startsWith('Stars')) {
				obj = { ...obj, [key]: value.split(', ') };
				arr.push(obj);
			} else {
				obj = { ...obj, ...keyValue };
			}
		}
	});
	return arr;
}

module.exports = parse;
