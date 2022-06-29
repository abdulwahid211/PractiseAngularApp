import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "src/app/Components/Movie/movie.component";
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    baseURL: string = "https://api.themoviedb.org/3/movie/popular";
    API_KEY: string ="9b75d5e316dbf6cb0dae80e04e4454b3";

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.baseURL + '?api_key=' + this.API_KEY + '&language=en-US&page=1')
        .pipe(
            tap((data: any) => console.log('All: ', JSON.stringify(data))),
            map((data :any) => {
              return data.results
            }),
            catchError(this.handleError)
          );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}