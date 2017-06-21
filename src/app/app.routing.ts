import { RouterModule } from '@angular/router';
import { ListPopularComponent } from './list-popular.component';
import { SearchComponent } from './search.component';
import { MovieComponent } from './movie.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListPopularComponent },
  { path: 'search/:term', component: SearchComponent },  
  { path: 'movie/:id', component: MovieComponent } 
];

export const AppRouting = RouterModule.forRoot(routes, { 
  //useHash: true
});