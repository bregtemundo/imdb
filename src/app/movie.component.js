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
var router_1 = require("@angular/router");
var movie_service_1 = require("./movie.service");
var router_animations_1 = require("./router.animations");
var config_service_1 = require("./config.service");
var MovieComponent = (function () {
    function MovieComponent(route, movieService, configService) {
        this.route = route;
        this.movieService = movieService;
        this.configService = configService;
        this.errorMessage = "";
        this.castSliderOptions = {
            slidesPerView: 4
        };
        this.mediaSliderOptions = {
            slidesPerView: 'auto',
            spaceBetween: 20
        };
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.movieId = params["id"];
            _this.getMovie(_this.movieId);
        });
    };
    MovieComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        $('movie').removeClass("movie--faded");
    };
    MovieComponent.prototype.getMovie = function (id) {
        var _this = this;
        //get list of pop movies
        var res = this.movieService.getMovie(id).subscribe(function (p) {
            _this.movie = p;
            //set page title
            _this.configService.setPageTitle(_this.movie.title);
            //trick to help performance (wait for transition to show videos)
            setTimeout(_this.addVideos.bind(_this, _this.movie.videos), 1200);
        }, function (e) { return _this.errorMessage = e; });
    };
    MovieComponent.prototype.addVideos = function (videos) {
        this.videos = videos;
    };
    MovieComponent.prototype.onVideoStateChange = function (event) {
        var playCodes = [3, 1];
        if (playCodes.indexOf(event.data) > -1) {
            $('movie').addClass("movie--faded");
        }
        else {
            $('movie').removeClass("movie--faded");
        }
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'movie',
        templateUrl: './movie.component.html',
        animations: [router_animations_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, movie_service_1.MovieService, config_service_1.ConfigService])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map