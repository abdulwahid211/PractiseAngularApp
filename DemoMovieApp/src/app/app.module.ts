import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieComponent, MovieListComponent, AppComponent } from './Components/Movie/movie.component';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    MovieComponent, MovieListComponent, AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
