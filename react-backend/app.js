const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moviesPost = require('./handlers/setMoviesHandler');
const movieRouter = require('./handlers/getMovieHandler');
const deleteMovie = require('./handlers/deleteMovieHandler');
const addMovie = require('./handlers/addMovieHandler');
const searchMovies = require('./handlers/searchMoviesHandlers');
const getMovies = require('./handlers/getMoviesHandler');

const app = express();

app.use(cors());

app.post('/movies', moviesPost);

app.use(bodyParser.json());
app.get('/movies', getMovies);
app.post('/movies/create', addMovie);
app.get('/movies/search', searchMovies);
app.get('/movies/:movieId', movieRouter);
app.delete('/movies/:movieId', deleteMovie);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.error(err.message);
	res.end(err.message);
});

module.exports = app;
