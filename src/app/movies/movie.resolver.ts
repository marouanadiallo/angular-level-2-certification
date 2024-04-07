import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Movie } from "../shared/model/model-type";
import { Observable, of } from "rxjs";
import { inject } from "@angular/core";
import { MoviesService } from "./movies.service";

export const GetMovieResolver : ResolveFn<Movie|null> = (route: ActivatedRouteSnapshot): Observable<Movie|null> => {
    const movieService = inject(MoviesService);
    const id: string | null = route.paramMap.get("id");
    if(id) {
       return movieService.getMovieById(id);
    }
    return of(null)
}