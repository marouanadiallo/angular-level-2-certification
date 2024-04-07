import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

export const DetailsGuard: CanMatchFn = (route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> => {
    const router: Router = inject(Router);
    if(segments.length !== 2) {
        return of(router.createUrlTree(['']));
    }
    return of(true);
}