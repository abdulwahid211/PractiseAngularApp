import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieListService } from '../../Services/Movie/movie-list.service'
import { Subscription } from 'rxjs';
import { Movie } from '../Movie/movieModal';

@Component({
  templateUrl: './movie-list.html',
  styleUrls: ['./movie.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  sub!: Subscription;
  errorMessage = '';

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.sub = this.movieListService.getAllMovies().subscribe({
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

