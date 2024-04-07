import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetMovieResolver } from './movies/movie.resolver';

export const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'movies'
    },
    {
        path: 'movies',
        loadComponent: ()=> import('./movies/movies.component').then(cmp => cmp.MoviesComponent)
    },
    {
        path: 'movies/:id',
        loadComponent: ()=> import('./movies/movie-details/movie-details.component')
                            .then(cmp => cmp.MovieDetailsComponent),
        resolve: { movie: GetMovieResolver },
    },
    { path: '**', component: PageNotFoundComponent }
];
