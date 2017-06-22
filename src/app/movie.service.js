"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var movie_1 = require("./movie");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var MovieService = (function () {
    function MovieService(jsonp) {
        this.jsonp = jsonp;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = '4b308d94611324c379cc4a7bbeec33e0';
    }
    MovieService.prototype.getPopularMovies = function () {
        return this.jsonp.get(this.baseUrl + '/movie/popular' + '?api_key=' + this.apiKey + '&callback=JSONP_CALLBACK')
            .map(this.mapMovies.bind(this))
            .catch(this.handleError);
    };
    MovieService.prototype.getMovie = function (id) {
        return this.jsonp.get(this.baseUrl + '/movie/' + id + '?api_key=' + this.apiKey + '&append_to_response=credits,videos,images' + '&callback=JSONP_CALLBACK')
            .map(this.mapMovie.bind(this))
            .catch(this.handleError);
    };
    MovieService.prototype.searchMovies = function (term) {
        return this.jsonp.get(this.baseUrl + '/search/movie' + '?api_key=' + this.apiKey + '&callback=JSONP_CALLBACK' + '&query=' + term + '&page=1')
            .map(this.mapMovies.bind(this))
            .catch(this.handleError);
    };
    MovieService.prototype.mapMovie = function (response) {
        return this.convertToMovie(response.json());
    };
    MovieService.prototype.mapMovies = function (response) {
        return response.json().results /*.slice(0, 5)*/.map(this.convertToMovie);
    };
    MovieService.prototype.convertToMovie = function (result) {
        var movie = new movie_1.Movie();
        movie.adult = result.adult;
        movie.backdrop_path = (result.backdrop_path) ? result.backdrop_path : result.poster_path;
        movie.id = result.id;
        movie.original_title = result.original_title;
        movie.release_date = result.release_date;
        movie.poster_path = result.poster_path;
        movie.popularity = result.popularity;
        movie.title = result.title;
        movie.vote_average = result.vote_average;
        movie.vote_count = result.vote_count;
        movie.genres = result.genres;
        movie.overview = result.overview;
        movie.release_date = result.release_date;
        movie.cast = (result.credits) ? result.credits.cast : [];
        movie.images = (result.images) ? result.images.posters.slice(0, 5).concat(result.images.backdrops.slice(0, 5)).sort(function () { return (Math.random() - 0.5); }) : [];
        movie.videos = (result.videos) ? result.videos.results.slice(0, 5) : [];
        return movie;
    };
    MovieService.prototype.handleError = function (error) {
        // log error    
        var errorMsg = error.message || "There was a problem retrieving your data!";
        // throw an application level error
        return Observable_1.Observable.throw(errorMsg);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map