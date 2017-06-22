import { Component } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { Router } from '@angular/router';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { ConfigService } from './config.service';

@Component({
  selector: 'searchbox',
  templateUrl: './search-box.component.html',   
})
export class SearchBoxComponent  {       

  constructor(private router: Router, private configService: ConfigService){
    
  }

  search(term:string){   
    this.router.navigate(['/search/' + term]);
    return false;
  }

  inputEnter(term:string){    
     this.configService.setPageTitle(term);
  }
}
