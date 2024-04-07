import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('MovieDetailsComponent', ()=> {

    let movieDetailsComponent: MovieDetailsComponent;
    let fixture: ComponentFixture<MovieDetailsComponent>;

    beforeEach(waitForAsync(()=> {
        TestBed.configureTestingModule({
            imports: [MovieDetailsComponent],
            providers: [
                provideRouter(routes)
            ]
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(MovieDetailsComponent);
            movieDetailsComponent = fixture.componentInstance;
        });
    }));

    it('Should create movieDetailsComponent', ()=> {
        expect(movieDetailsComponent).toBeTruthy();
    })
})