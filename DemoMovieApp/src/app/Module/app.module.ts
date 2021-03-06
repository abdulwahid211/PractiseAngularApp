import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../Components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieComponent } from '../Components/Movie/movie.component';
import { MovieListComponent } from '../Components/Movie/movies-list.component';
import { MovieProfileComponent } from '../Components/Movie/movie-profile.component';
import { MovieDetailGuard } from '../Components/Movie/movies-detail.guard';

@NgModule({
  declarations: [
     AppComponent, MovieComponent, MovieListComponent, MovieProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'movies', component: MovieListComponent },
      {
        path: 'movie/:id',
        canActivate: [MovieDetailGuard],
        component: MovieProfileComponent
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
