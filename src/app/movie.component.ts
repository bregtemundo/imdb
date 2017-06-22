import { Component } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { routerTransition } from './router.animations';
import { ConfigService } from './config.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html', 
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class MovieComponent  {   
  sub:any;  
  movieId: number;
  movie: Movie;
  videos:any[];
  errorMessage:string = "";
  castSliderOptions:any;
  mediaSliderOptions:any;
  
  constructor(private route: ActivatedRoute, private movieService: MovieService, private configService: ConfigService){
    this.castSliderOptions = {      
      slidesPerView: 4      
    }

    this.mediaSliderOptions = {      
      slidesPerView: 'auto',            
      spaceBetween: 20
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = params["id"];      
      this.getMovie(this.movieId);            
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    $('movie').removeClass("movie--faded");
  }

  getMovie(id:number) {
    //get list of pop movies
    let res = this.movieService.getMovie(id).subscribe(
      ( p:any ) => {         
        this.movie = p;      

        //set page title
        this.configService.setPageTitle(this.movie.title);        

        //trick to help performance (wait for transition to show videos)
        setTimeout(this.addVideos.bind(this, this.movie.videos) ,1200);
      },
      ( e:string ) => this.errorMessage = e
    );     
  }

  addVideos(videos:any) {
    this.videos = videos;
  }

  onVideoStateChange(event:any) {    
    let playCodes = [3,1];
    if(playCodes.indexOf(event.data)>-1) {
      $('movie').addClass("movie--faded");
    }
    else{
      $('movie').removeClass("movie--faded");
    }
  }
}
