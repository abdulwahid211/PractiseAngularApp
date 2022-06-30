import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie/movieModal';
import { MovieProfileService } from 'src/app/Services/Movie/movie-profile.service';

@Component({
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit {
  pageTitle = 'Movie Profile Detail';
  errorMessage = '';
  data!: Movie;

  constructor(private movieProfileService : MovieProfileService, private route: ActivatedRoute,
    private router: Router,) { }

    getMovieProfileData(id:number):void{
      this.movieProfileService.getMovieProfile(id).subscribe({
        next: movie => this.data = movie,
        error: err => this.errorMessage = err
      })
    }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getMovieProfileData(id);
    }
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
