import { Component } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { routerTransition } from './router.animations';
import { ConfigService } from './config.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html', 
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class SearchComponent  {   
  sub:any;  
  searchTerm: string;
  movies: Movie[] = [];
  errorMessage:string = "";
  revealConfig:any;
  
  constructor(private route: ActivatedRoute, private movieService: MovieService, private configService: ConfigService){
    this.revealConfig = { viewFactor: .3, duration: 1500, distance: '200px', scale:1, container: 'search' };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.searchTerm = params["term"];      
      this.search(this.searchTerm);

      //set page title
      this.configService.setPageTitle(this.searchTerm);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  search(term:string) {
    //get list of pop movies
    let res = this.movieService.searchMovies(term).subscribe(
      ( p:any ) => { 
        this.movies = p 
        if(this.movies.length <= 0) {
          //set page title
          this.configService.setPageTitle("no results!");
        }
      },
      ( e:string ) => this.errorMessage = e
    );     
  }
}
