import { TestBed, waitForAsync } from "@angular/core/testing";
import { MoviesService } from "./movies.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('MoviesService', ()=> {
    let moviesService: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(waitForAsync(()=> {

        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers: [
                MoviesService
            ]
        });
        moviesService = TestBed.inject(MoviesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    }));

    it('Should get movies array', ()=> {
        const movies = [{
            "id": "bcfd5548-da79-44df-a37b-511aa97d1834",
            "title": "Fantastic Beasts: The Secrets of Dumbledore",
            "duration": "142",
            "budget": "200",
            "release_date": "2022-04-08"
          }]

        moviesService.loadMovies();

        const req = httpTestingController.expectOne('/movies');
        expect(req.request.method).toEqual('GET');

        req.flush(movies)
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});