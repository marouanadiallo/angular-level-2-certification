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

    private errorHandler(error: HttpErrorResponse): Observable<Movie[]> {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return of([]);
    }
}