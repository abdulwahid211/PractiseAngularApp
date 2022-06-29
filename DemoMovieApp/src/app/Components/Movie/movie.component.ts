import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../Services/Movie/movie.service'
import { Subscription } from 'rxjs';
export class Movie {
  public original_title: string;
  public poster_path: string;
  public overview: string;
  public vote_average: number;

  constructor(original_title: string, poster_path: string, overview: string, vote_average: number) {
    this.original_title = original_title;
    this.poster_path = poster_path;
    this.overview = overview;
    this.vote_average = vote_average;
  }
}

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input('movie') data!: Movie;
}

@Component({
  selector: 'movie-list',
  template: `
  <movie *ngFor="let j of movies" [movie]="j"></movie>
    `
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  sub!: Subscription;
  errorMessage = '';


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.sub = this.movieService.getMovies().subscribe({
      next: (movie: any[]) => {
        this.movies = movie;
      },
      error: (err: string) => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

@Component({
  selector: 'app-root',
  template: `
  <movie-list></movie-list>
    `
})
export class AppComponent {
}

