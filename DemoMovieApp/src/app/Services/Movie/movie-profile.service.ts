import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "../../Components/Movie/movieModal";
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HandleError } from "./serviceUtil";

@Injectable({
    providedIn: 'root'
})
export class MovieProfileService {

    baseURL: string = "https://api.themoviedb.org/3/movie/";
    API_KEY: string ="9b75d5e316dbf6cb0dae80e04e4454b3";

    constructor(private http: HttpClient) { }

    getMovieProfile(movieId:number): Observable<Movie> {
        return this.http.get<Movie>(this.baseURL +movieId + '?api_key=' + this.API_KEY)
        .pipe(
            tap((data: any) => console.log('All: ', JSON.stringify(data))),
            map((data :any) => {
              return data
            }),
            catchError(HandleError)
          );
    }
}