const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const moviesPost = require('./handlers/setMoviesHandler');
const movieRouter = require('./handlers/getMovieHandler');
const deleteMovie = require('./handlers/deleteMovieHandler');
const addMovie = require('./handlers/addMoviesHandler');
const searchMovies = require('./handlers/searchMoviesHandlers');
const getMovies = require('./handlers/getMoviesHandler');

const app = express();

app.use(cors());

app.post('/movies/create', addMovie);
app.post('/movies', moviesPost);
app.get('/movies', getMovies);
app.get('/movies/search', searchMovies);
app.get('/movies/:moviesId', movieRouter);
app.delete('/movies/:moviesId', deleteMovie);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log(err.message);
	res.end(err.message);
});

module.exports = app;
