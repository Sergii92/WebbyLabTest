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
		body = parse(body);
		client.connect((err) => {
			if (err) throw new Error(err);
			const db = client.db(DB_NAME);
			const collection = db.collection(COLLECTION_NAME);
			collection.insertMany(body, (err, result) => {
				if (err) throw new Error(err);
				res.writeHead(200, headers);
				res.end(JSON.stringify(result.ops));
				client.close();
			});
		});
	});
};

module.exports = moviesPost;
