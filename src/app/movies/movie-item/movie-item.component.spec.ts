import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MovieItemComponent } from "./movie-item.component"

describe('MovieItemComponent', ()=> {
    let movieItemComponent: MovieItemComponent;
    let fixture: ComponentFixture<MovieItemComponent>;

    beforeEach(waitForAsync(()=> {
        TestBed.configureTestingModule({
            imports: [MovieItemComponent],
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(MovieItemComponent);
            movieItemComponent = fixture.componentInstance;
        })
    }));

    it('should be create MovieItemComponent', ()=> {
        expect(movieItemComponent).toBeTruthy();
    })
})