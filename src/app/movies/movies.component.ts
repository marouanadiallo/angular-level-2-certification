import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { Observable, Subscription, map } from "rxjs";
import { Movie } from "../shared/model/model-type";
import { MoviesService } from "./movies.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-movies",
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [
        NgIf,
        AsyncPipe,
        NgFor,
        RouterModule,
        MovieItemComponent,
        ReactiveFormsModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit, OnDestroy {

    public movies$!: Observable<Movie[]>
    public filters: FormGroup<{title: FormControl<string>, releaseYear: FormControl<string>}>;
    private _subscription: Subscription;

    constructor(private _moviesService: MoviesService,
        private _fb: FormBuilder,
        private _route: ActivatedRoute,
        private _router: Router) {

            this._subscription = new Subscription();
            this.filters = this._fb.nonNullable.group({
                title: [''],
                releaseYear: ['']
            });

    }

    public ngOnInit(): void {
        this._moviesService.loadMovies();
        this.movies$ = this._moviesService.movies$;

        this._subscription.add(
            this.filters.valueChanges.subscribe(filters => {
                this.movies$ = this._moviesService.movies$.pipe(
                    map(movies => this._moviesService
                                    .filterByTitleAndRelease(movies, filters.title || '', filters.releaseYear || ''))
                );
            })
        );
    }

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    public async showDetails(id: string) {
        await this._router.navigate(['.', id], { relativeTo: this._route });
    }

    
}