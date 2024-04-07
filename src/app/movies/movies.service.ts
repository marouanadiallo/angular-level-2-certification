import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, finalize, of, shareReplay } from "rxjs";
import { Movie } from "../shared/model/model-type";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    #movies$: BehaviorSubject<Movie[]>;
    public movies$: Observable<Movie[]>;

    constructor(private http: HttpClient) {
        this.#movies$ = new BehaviorSubject<Movie[]>([]);
        this.movies$ = this.#movies$.asObservable();
    }

    public loadMovies(): void {
        this.http.get<Movie[]>('/movies').pipe(
            finalize(()=> {}),
            shareReplay(),
            catchError(this.errorHandler)
        ).subscribe(movies => this.#movies$.next(movies));
    }

    public getMovieById(id: string) : Observable<Movie> {
        return this.http.get<Movie>(`/movies/${id}`);
    }

    public filterByTitleAndRelease(movies: Movie[], title: string, releaseYear: string) {

        let moviesfilterResult: Movie[] = [];
        if(title && releaseYear) {
            moviesfilterResult = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()) && 
                                                        movie.release_date.split("-")[0] === releaseYear );
        } else if(releaseYear) {
            moviesfilterResult = moviesfilterResult.filter(movie => movie.release_date.split("-")[0] === releaseYear); 
        } else if(title) {
            moviesfilterResult = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
        } else {
            moviesfilterResult = movies;
        }

        return moviesfilterResult;
    }

    private errorHandler(error: HttpErrorResponse): Observable<Movie[]> {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        return of([]);
    }
}