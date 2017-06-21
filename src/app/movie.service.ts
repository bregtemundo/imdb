import { Injectable } from '@angular/core';
import { Jsonp, Response, RequestOptions, Headers } from '@angular/http';
import { Movie }           from './movie';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MovieService{

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '4b308d94611324c379cc4a7bbeec33e0';

  constructor(private jsonp : Jsonp ){
  }

  public getPopularMovies(): Observable< Movie[] > {      
    return this.jsonp.get(this.baseUrl + '/movie/popular' + '?api_key=' + this.apiKey + '&callback=JSONP_CALLBACK')           
      .map(this.mapMovies.bind(this))      
      .catch(this.handleError);    
   
  }

  public getMovie(id:number): Observable< Movie[] > {      
    return this.jsonp.get(this.baseUrl + '/movie/' + id + '?api_key=' + this.apiKey + '&append_to_response=credits,videos,images' + '&callback=JSONP_CALLBACK')
      .map(this.mapMovie.bind(this))
      .catch(this.handleError);    
   
  }

  public searchMovies(term:string): Observable< Movie[] > {      
    return this.jsonp.get(this.baseUrl + '/search/movie' + '?api_key=' + this.apiKey + '&callback=JSONP_CALLBACK' + '&query=' + term + '&page=1')           
      .map(this.mapMovies.bind(this))      
      .catch(this.handleError);    
   
  }

  private mapMovie(response:Response): Movie {   
    return this.convertToMovie(response.json());
  }

  private mapMovies(response:Response): Movie[] {   
    return response.json().results/*.slice(0, 5)*/.map(this.convertToMovie);
  }

  private convertToMovie(result:any): Movie {
    
    let movie = new Movie();

    movie.adult = result.adult;
    movie.backdrop_path = (result.backdrop_path) ? result.backdrop_path : result.poster_path;
    movie.id = result.id;
    movie.original_title = result.original_title;
    movie.release_date = result.release_date;
    movie.poster_path = result.poster_path;
    movie.popularity = result.popularity;
    movie.title = result.title;
    movie.vote_average = result.vote_average;
    movie.vote_count = result.vote_count;
    movie.genres = result.genres;
    movie.overview = result.overview;
    movie.release_date = result.release_date;
    movie.cast = (result.credits) ? result.credits.cast : [];
    movie.images = (result.images) ? result.images.posters.slice(0,5).concat(result.images.backdrops.slice(0,5)).sort(() => (Math.random() - 0.5)) : [];
    movie.videos = (result.videos) ? result.videos.results.slice(0,5) : [];
                   
    return movie;
  }
  
  private handleError (error: any) {
    // log error    
    let errorMsg = error.message || `There was a problem retrieving your data!`    

    // throw an application level error
    return Observable.throw(errorMsg); 
  }
/*  
  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson)
      .catch(handleError);
      return person$;
  }
  */
}

/*
function mapPersons(response:Response): Person[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
   // toPerson looks just like in the previous example
   return toPerson(response.json());
}
*/



