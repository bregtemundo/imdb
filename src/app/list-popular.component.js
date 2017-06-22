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
var angular2_swiper_1 = require("angular2-swiper");
var movie_service_1 = require("./movie.service");
var router_animations_1 = require("./router.animations");
var config_service_1 = require("./config.service");
var ListPopularComponent = (function () {
    function ListPopularComponent(movieService, configService) {
        var _this = this;
        this.movieService = movieService;
        this.configService = configService;
        this.movies = [];
        this.errorMessage = '';
        this.loaded = false;
        this.sliderProgress = 0;
        this.progress1 = '';
        this.slideshowOptions = {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 5,
            touchRatio: 1.5,
            onSetTranslate: this.onSetTranslate.bind(this),
            onSetTransition: this.onSetTransition.bind(this),
            virtualTranslate: true,
        };
        //get list of pop movies
        var res = movieService.getPopularMovies().subscribe(function (p) { _this.movies = p; _this.loaded = true, setTimeout(_this.onInit.bind(_this), 1); }, function (e) { return _this.errorMessage = e; });
        //set page title
        configService.setPageTitle("Most popular movies");
    }
    ListPopularComponent.prototype.getQuadraticBezierXYatPercent = function (startPt, controlPt, endPt, percent) {
        var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
        var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
        return ({
            x: x,
            y: y
        });
    };
    ListPopularComponent.prototype.moveSlide = function (swiper, index, progress, duration) {
        if (duration === void 0) { duration = '0s'; }
        var slide = swiper.slides[index];
        var translate, posterTranslate, posterScale, boxShadow, boxShadowOpacity, xy;
        //get the progress of single slide
        var i = index - 1;
        var slideProgress = (progress - (i * (100 / (swiper.slides.length - 1)))) / (100 / (swiper.slides.length - 1));
        //calc slide properties
        if (slideProgress > 0 && slideProgress < 2 || true) {
            translate = slideProgress * swiper.width;
            posterTranslate = 250 - slideProgress * 250;
            posterScale = Math.max(Math.min(.1 + 1.9 * (slideProgress - .5), 1), .1);
            xy = this.getQuadraticBezierXYatPercent({
                x: 0,
                y: 0
            }, {
                x: -swiper.width / 2,
                y: 800 / 2
            }, {
                x: -swiper.width / 2,
                y: 800
            }, slideProgress - .5);
        }
        //apply style    
        $('.poster', slide).css({
            transform: 'translate3d(' + (xy.x + 600) + 'px,' + xy.y + 'px,' + posterTranslate + 'px)',
            transitionDuration: duration
        });
        $('.poster-inner', slide).css({
            transform: 'scale(' + posterScale + ',' + posterScale + ')',
            transitionDuration: duration
        });
    };
    ListPopularComponent.prototype.onInit = function () {
        console.log(this.swiperContainer.swiper.slides.length);
        this.swiperContainer.swiper.update(true);
        /*
        this.sliderProgress = 0;
        alert("ini");
    
        //move single slide
        for (var i = 0; i < swiper.slides.length; i++){
          this.moveSlide(swiper, i, this.sliderProgress);
        }
        */
    };
    ListPopularComponent.prototype.onSetTranslate = function (swiper, translate) {
        //calculate slide progress
        var newProgress = swiper.progress * 100;
        this.sliderProgress += (newProgress - this.sliderProgress) / 50;
        //move title according to slide progress
        $('#page_title_inner').css({
            transform: 'translateX(-' + this.sliderProgress + '%)',
            transitionDuration: '0s'
        });
        //move single slide
        for (var i = 0; i < swiper.slides.length; i++) {
            this.moveSlide(swiper, i, this.sliderProgress);
        }
    };
    ListPopularComponent.prototype.onSetTransition = function (swiper, transition) {
        var newProgress = swiper.progress * 100;
        this.sliderProgress = newProgress;
        //move title according to slide progress
        $('#page_title_inner').css({
            transform: 'translateX(-' + this.sliderProgress + '%)',
            transitionDuration: '.6s'
        });
        for (var i = 0; i < swiper.slides.length; i++) {
            this.moveSlide(swiper, i, this.sliderProgress, '.6s');
        }
    };
    return ListPopularComponent;
}());
__decorate([
    core_1.ViewChild(angular2_swiper_1.KSSwiperContainer),
    __metadata("design:type", angular2_swiper_1.KSSwiperContainer)
], ListPopularComponent.prototype, "swiperContainer", void 0);
ListPopularComponent = __decorate([
    core_1.Component({
        selector: 'list-popular',
        templateUrl: './list-popular.component.html',
        animations: [router_animations_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, config_service_1.ConfigService])
], ListPopularComponent);
exports.ListPopularComponent = ListPopularComponent;
//# sourceMappingURL=list-popular.component.js.map