"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_youtube_player_1 = require("ng2-youtube-player");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var list_popular_component_1 = require("./list-popular.component");
var search_component_1 = require("./search.component");
var search_box_component_1 = require("./search-box.component");
var movie_component_1 = require("./movie.component");
var movie_service_1 = require("./movie.service");
var config_service_1 = require("./config.service");
var angular2_swiper_1 = require("angular2-swiper");
var ng_scrollreveal_1 = require("ng-scrollreveal");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            animations_1.BrowserAnimationsModule,
            angular2_swiper_1.KSSwiperModule,
            app_routing_1.AppRouting,
            ng_scrollreveal_1.NgsRevealModule.forRoot(),
            ng2_youtube_player_1.YoutubePlayerModule
        ],
        providers: [movie_service_1.MovieService, config_service_1.ConfigService],
        declarations: [app_component_1.AppComponent, list_popular_component_1.ListPopularComponent, search_component_1.SearchComponent, search_box_component_1.SearchBoxComponent, movie_component_1.MovieComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map