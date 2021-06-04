const { MongoClient } = require('mongodb');
const { URL, DB_NAME, COLLECTION_NAME } = require('../constants/dbConstants');
const { headers } = require('../constants/nodeConstants');

const addMovie = (req, res, next) => {
	const params = req.body;
	const client = new MongoClient(URL);
	client.connect((err) => {
		if (err) throw new Error(err);
		const db = client.db(DB_NAME);
		const collection = db.collection(COLLECTION_NAME);
		collection.insertOne(params, (err, result) => {
			if (err) throw new Error(err);
			res.writeHead(200, headers);
			res.end(JSON.stringify(result.ops));
			client.close();
		});
	});
};

module.exports = addMovie;
