const { MongoClient } = require('mongodb');
const parse = require('../utils/parse');
const { URL, DB_NAME, COLLECTION_NAME } = require('../constants/dbConstants');
const { headers } = require('../constants/nodeConstants');

const moviesPost = (req, res) => {
	let body = '';

	req.on('data', function(data) {
		body += data;
	});

	req.on('end', function() {
		const client = new MongoClient(URL);
		try {
			body = parse(body);
		} catch (e) {
			console.error('errrrrrrrrrroooooooooor', e);
		}

		client.connect((err) => {
			if (err) throw new Error(err);
			const db = client.db(DB_NAME);
			const collection = db.collection(COLLECTION_NAME);
			collection.find({}).project({ Title: 1 }).toArray((err, allMoviesFromDb) => {
				const duplicates = allMoviesFromDb.reduce((duplicatedTitles, movieFromDb) => {
					body.forEach((movieFromFile) => {
						if (movieFromFile.Title === movieFromDb.Title) {
							duplicatedTitles[movieFromDb.Title] = true;
						}
					});
					return duplicatedTitles;
				}, {});

				const duplicatesArray = Object.keys(duplicates);

				if (duplicatesArray.length) {
					res.writeHead(400, headers);
					res.end(
						JSON.stringify({
							code: 400,
							message: `Duplicated movies: ${duplicatesArray.join(', ')}`
						})
					);
					client.close();
				} else if (!body.length) {
					res.writeHead(400, headers);
					res.end(
						JSON.stringify({
							code: 400,
							message: `Incorect data in file`
						})
					);
					client.close();
				} else {
					collection.insertMany(body, (err, result) => {
						if (err) throw new Error(err);
						res.writeHead(200, headers);
						res.end(JSON.stringify(result.ops.map(({ _id, Title }) => ({ _id, Title }))));
						client.close();
					});
				}
			});
		});
	});
};

module.exports = moviesPost;
