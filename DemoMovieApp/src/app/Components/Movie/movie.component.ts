import { Input, Component } from '@angular/core';
import { Movie } from '../Movie/movieModal';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input('movie') data!: Movie;
}


