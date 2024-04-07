import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MoviesComponent } from "./movies.component";
import { MoviesService } from "./movies.service";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

describe('MoviesComponent', ()=> {
    let moviesComponent: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;

    beforeEach(waitForAsync(()=> {
        const moviesService = jasmine.createSpyObj('MoviesService', ['loadMovies', 'getMovieById']);
        TestBed.configureTestingModule({
            imports: [MoviesComponent],
            providers: [
                { provide: MoviesService, useValue: moviesService },
                provideRouter(routes)
            ]
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(MoviesComponent);
            moviesComponent = fixture.componentInstance;
        })
    }));

    it('Should create component', async ()=> {
        expect(moviesComponent).toBeTruthy();
    })
});