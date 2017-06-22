"use strict";
var router_1 = require("@angular/router");
var list_popular_component_1 = require("./list-popular.component");
var search_component_1 = require("./search.component");
var movie_component_1 = require("./movie.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: list_popular_component_1.ListPopularComponent },
    { path: 'search/:term', component: search_component_1.SearchComponent },
    { path: 'movie/:id', component: movie_component_1.MovieComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(routes, {});
//# sourceMappingURL=app.routing.js.map