const { MongoClient } = require('mongodb');
const { URL, DB_NAME, COLLECTION_NAME } = require('../constants/dbConstants');
const { headers } = require('../constants/nodeConstants');

const addMovie = (req, res, next) => {
	const params = req.body;
	const client = new MongoClient(URL);

	client.connect((err) => {
		const db = client.db(DB_NAME);
		const collection = db.collection(COLLECTION_NAME);

		if (err) throw new Error(err);
		collection.findOne({ Title: params.Title }, (err, result) => {
			if (!result) {
				collection.insertOne(params, (err, result) => {
					if (err) throw new Error(err);
					res.writeHead(200, headers);
					res.end(JSON.stringify(result.ops.map(({ _id, Title }) => ({ _id, Title }))));
					client.close();
				});
			} else {
				res.writeHead(400, headers);
				res.end(
					JSON.stringify({
						code: 400,
						message: `Duplicated movie ${params.Title}`
					})
				);
				client.close();
			}
		});
	});
};

module.exports = addMovie;
