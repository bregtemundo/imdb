import { Component } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(private movieService: MovieService, private configService: ConfigService, private router: Router){
    // look for changes in pageTitle (through ConfigService)
    this.configService.getPageTitle().subscribe((title: string) => {       
       this.pageTitle = title;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {      
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      setTimeout(() => $("html,body").animate({scrollTop: 0}, 500, "swing") ,200);
      
    });
  }

  changeText() {
    this.configService.setPageTitle("" + Math.random());    
  }
}
