import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieComponent, MovieListComponent, AppComponent } from './Components/Movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MovieComponent, MovieListComponent, AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
