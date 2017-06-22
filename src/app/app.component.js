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
var config_service_1 = require("./config.service");
var router_animations_1 = require("./router.animations");
var AppComponent = (function () {
    function AppComponent(movieService, configService, router) {
        var _this = this;
        this.movieService = movieService;
        this.configService = configService;
        this.router = router;
        this.errorMessage = '';
        this.pageTitle = '';
        // look for changes in pageTitle (through ConfigService)
        this.configService.getPageTitle().subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            setTimeout(function () { return $("html,body").animate({ scrollTop: 0 }, 500, "swing"); }, 200);
        });
    };
    AppComponent.prototype.changeText = function () {
        this.configService.setPageTitle("" + Math.random());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        animations: [router_animations_1.swapTransition()]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, config_service_1.ConfigService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map