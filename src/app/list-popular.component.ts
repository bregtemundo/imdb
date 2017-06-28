import { Component, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';

import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { routerTransition } from './router.animations';
import { ConfigService } from './config.service';

@Component({
  selector: 'list-popular',
  templateUrl: './list-popular.component.html', 
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}   
})
export class ListPopularComponent  { 
  
  movies: Movie[] = [];  
  errorMessage: string = '';  
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
  slideshowOptions:any;
  sliderProgress:number = 0;   
  

  constructor(private movieService: MovieService, private configService: ConfigService){
    //config options for swiper
    this.slideshowOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 5,      
      touchRatio: 1,        
      onSetTranslate: this.onSetTranslate.bind(this),
      onSetTransition: this.onSetTransition.bind(this),     
      virtualTranslate: true,     
    };


    //get list of popular movies
    let res = movieService.getPopularMovies().subscribe(
      ( p ) => { this.movies = p; setTimeout (this.onInit.bind(this), 1) },
      ( e ) => this.errorMessage = e 
    );   

    //set page title
    configService.setPageTitle("Most popular movies");
    
  }

  
  getQuadraticBezierXYatPercent(startPt:any, controlPt:any, endPt:any, percent:number) {    
    let x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
    let y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
    return ({
        x: x,
        y: y
    });
  }

  moveSlide(swiper:any, index:number, progress:number, duration:string='0s' ){
    let slide = swiper.slides[index];
    let translate, posterTranslate, posterScale, xy;

    //get the progress of single slide
    let i = index-1;
    let slideProgress = (progress - (i * (100/(swiper.slides.length-1)))) / (100/(swiper.slides.length-1)) ;


    //calc slide properties
    if (slideProgress > 0 && slideProgress < 2 || true ) {         
      translate = slideProgress * swiper.width;
      posterTranslate = 250 - slideProgress * 250;
      posterScale = Math.max(Math.min(.1 + 1.9 * (slideProgress-.5), 1),.1);
            
      xy = this.getQuadraticBezierXYatPercent({
          x: 0,
          y: 0
      }, {
          x: -swiper.width/2,
          y: 800/2
      }, {
          x: -swiper.width/2,
          y: 800
      }, slideProgress-.5);
    }
    

    
    //apply style    
    $('.poster', slide).css({            
      transform: 'translate3d(' + (xy.x+600)+ 'px,' + xy.y + 'px,'  + posterTranslate + 'px)',      
      transitionDuration: duration
    });   
    $('.poster-inner', slide).css({            
      transform: 'scale(' + posterScale + ',' + posterScale + ')',      
      transitionDuration: duration
    });   

  }

  //initialise swiper
  onInit() {    
    this.swiperContainer.swiper.update(true);   
  }

  //when swiper moving
  onSetTranslate (swiper:any, translate:any){    
    //calculate slide progress
    let newProgress = swiper.progress*100;
    this.sliderProgress += (newProgress-this.sliderProgress)/50;    

    //move title according to slide progress
    $('#page_title_inner').css({
      transform: 'translateX(-' + this.sliderProgress + '%)',
      transitionDuration: '0s'
    });
    
    //move single slide
    for (var i = 0; i < swiper.slides.length; i++){
      this.moveSlide(swiper, i, this.sliderProgress);      
    }
  }

  //when swiper goto or snap into place
  onSetTransition (swiper:any, transition:any){    
    let newProgress = swiper.progress*100;
    this.sliderProgress = newProgress;    
    
    //move title according to slide progress
    $('#page_title_inner').css({
      transform: 'translateX(-' + this.sliderProgress + '%)',
      transitionDuration: '.6s'
    });


    for (var i = 0; i < swiper.slides.length; i++){
      this.moveSlide(swiper, i, this.sliderProgress, '.6s');      
    }

  }

 
}
