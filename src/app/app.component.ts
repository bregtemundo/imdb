import { Component } from '@angular/core';


import { MovieService } from './movie.service';
import { Movie } from './movie';
import { ConfigService } from './config.service';
import { swapTransition } from './router.animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', 
  animations: [swapTransition()]
})
export class AppComponent  {   

  errorMessage: string = '';  
  pageTitle:string = '';  

  constructor(private movieService: MovieService, private configService: ConfigService){
    // look for changes in pageTitle (through ConfigService)
    this.configService.getPageTitle().subscribe((title: string) => {       
       this.pageTitle = title;
    });
  }
  

  changeText() {
    this.configService.setPageTitle("" + Math.random());    
  }
}
