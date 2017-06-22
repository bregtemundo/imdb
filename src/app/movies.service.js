"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//import { Person } from './person';
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = '4b308d94611324c379cc4a7bbeec33e0';
    }
    MovieService.prototype.getPopularMovies = function () {
        var result = this.http.get(this.baseUrl + '/movie/' + 'popular' + '&api_key=' + this.apiKey).map(this.extractData).catch(this.handleError);
        console.log(result);
        return result;
    };
    MovieService.prototype.extractData = function (res) {
        var body = res.json();
        //let results = body.results.filter((item)=> item.poster_path !== null);
        console.log(body);
        //console.log(results);
        //return results || { };
    };
    MovieService.prototype.handleError = function (error) {
        // log error
        // could be something more sofisticated
        var errorMsg = error.message || "There was a problem retrieving your data!";
        console.error(errorMsg);
        // throw an application level error
        return Observable_1.Observable.throw(errorMsg);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
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
//# sourceMappingURL=movies.service.js.map