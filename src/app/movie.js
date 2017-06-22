"use strict";
var Movie = (function () {
    function Movie() {
        this.image_base_path = 'https://image.tmdb.org/t/p';
        this.genres = [];
        this.cast = [];
        this.images = [];
        this.videos = [];
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map