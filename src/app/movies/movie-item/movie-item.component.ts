import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Movie } from "../../shared/model/model-type";
import { NgIf } from "@angular/common";
import { FormatBudgetPipe } from "../../shared/pipe/format-budget.pipe";
import { FormatDurationPipe } from "../../shared/pipe/format-duration.pipe";

@Component({
    selector: "app-movie-item",
    standalone: true,
    templateUrl: './movie-item.component.html',
    styleUrl: './movie-item.component.css',
    imports: [
        NgIf,
        FormatBudgetPipe,
        FormatDurationPipe
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent implements OnInit {

    @Input({ required: true }) movie: Movie | null;

    @Output() showDetailsEvent: EventEmitter<string>;

    constructor() {
        this.movie = null;
        this.showDetailsEvent = new EventEmitter();
    }

    public ngOnInit(): void {}

    public showDetails(movie: Movie): void {
        this.showDetailsEvent.emit(movie.id);
    }
}