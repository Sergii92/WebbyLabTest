const USER = 'root';
const PASSWORD = 'root';
const DB_NAME = 'webbyLabTest';
const COLLECTION_NAME = 'movies';

const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.b0jww.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = { URL, DB_NAME, COLLECTION_NAME };
