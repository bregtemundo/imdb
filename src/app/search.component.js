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
var SearchComponent = (function () {
    function SearchComponent(route, movieService, configService) {
        this.route = route;
        this.movieService = movieService;
        this.configService = configService;
        this.movies = [];
        this.errorMessage = "";
        //config options for the reveal on scroll anim
        this.revealConfig = { viewFactor: .3, duration: 1500, distance: '200px', scale: 1, container: 'search' };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.searchTerm = params["term"];
            _this.search(_this.searchTerm);
            //set page title
            _this.configService.setPageTitle(_this.searchTerm);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SearchComponent.prototype.search = function (term) {
        var _this = this;
        //get list of pop movies
        var res = this.movieService.searchMovies(term).subscribe(function (p) {
            _this.movies = p;
            if (_this.movies.length <= 0) {
                //set page title
                _this.configService.setPageTitle("no results!");
            }
        }, function (e) { return _this.errorMessage = e; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.component.html',
        animations: [router_animations_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, movie_service_1.MovieService, config_service_1.ConfigService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map