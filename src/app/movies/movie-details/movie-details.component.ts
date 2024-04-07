import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { AsyncPipe, NgIf, NgOptimizedImage } from "@angular/common";

import { Observable, map } from "rxjs";

import { Movie } from "../../shared/model/model-type";
import { FormatBudgetPipe } from './../../shared/pipe/format-budget.pipe';
import { FormatDurationPipe } from "../../shared/pipe/format-duration.pipe";

@Component({
    selector: "app-movie-details",
    standalone: true,
    templateUrl: './movie-details.component.html',
    styleUrl: './movie-details.component.css',
    imports: [
        NgIf,
        AsyncPipe,
        RouterModule,
        FormatBudgetPipe,
        NgOptimizedImage,
        FormatDurationPipe
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {

    public movie$! : Observable<Movie>;
    constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.movie$ = this.activatedRoute.data.pipe(map(({movie}) => movie));
    }
}