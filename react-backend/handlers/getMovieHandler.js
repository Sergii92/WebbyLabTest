const { MongoClient } = require('mongodb');
const { URL, DB_NAME, COLLECTION_NAME } = require('../constants/dbConstants');
const { headers } = require('../constants/nodeConstants');

const getMovie = (req, res, next) => {
	const movieId = req.params.movieId;
	const client = new MongoClient(URL);

	client.connect((err) => {
		if (err) throw new Error(err);
		const db = client.db(DB_NAME);
		const collection = db.collection(COLLECTION_NAME);
		collection.findOne({}, { _id: movieId }, (err, result) => {
			if (err) throw new Error(err);
			res.writeHead(200, headers);
			res.end(JSON.stringify(result));
			client.close();
		});
	});
};

module.exports = getMovie;
