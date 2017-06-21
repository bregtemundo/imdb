import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent }  from './app.component';
import { AppRouting } from './app.routing';
import { ListPopularComponent }  from './list-popular.component';
import { SearchComponent }  from './search.component';
import { SearchBoxComponent }  from './search-box.component';
import { MovieComponent }  from './movie.component';
import { MovieService }  from './movie.service';
import { ConfigService }  from './config.service';
import { KSSwiperModule } from 'angular2-swiper';
import { NgsRevealModule } from 'ng-scrollreveal';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    KSSwiperModule,
    AppRouting,
    NgsRevealModule.forRoot(),
    YoutubePlayerModule 
  ],
  providers:    [ MovieService, ConfigService ],
  declarations: [ AppComponent, ListPopularComponent, SearchComponent, SearchBoxComponent, MovieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
