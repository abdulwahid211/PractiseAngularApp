import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Input,Component, OnInit } from '@angular/core';

 export class Movie {
  public title: string;
  public image: string;
  public overview: string;
  public averageRatings: number;

  constructor(title: string, image: string, overview: string, averageRatings: number) {
    this.title = title;
    this.image = image;
    this.overview = overview;
    this.averageRatings = averageRatings;
  }
}

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  {
  @Input('movie') data! :Movie;
}

@Component({
  selector: 'movie-list',
  template: `
  <movie *ngFor="let j of movies" [movie]="j"></movie>
    `
})
export class MovieListComponent {
  movies: Movie[];

  constructor() {
    this.movies = [
      new Movie("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)", "vgebb", 78),
      new Movie("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)", "vgebb", 78),
      new Movie("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’", "vgebb", 78),
    ];
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

