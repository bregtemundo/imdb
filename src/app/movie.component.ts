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
      },
      ( e:string ) => this.errorMessage = e
    );     
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
