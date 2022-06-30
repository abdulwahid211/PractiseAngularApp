export class Movie {
    public id: number;
    public original_title: string;
    public poster_path: string;
    public overview: string;
    public vote_average: number;
  
    constructor(original_title: string, poster_path: string, overview: string, vote_average: number, id:number) {
      this.original_title = original_title;
      this.poster_path = poster_path;
      this.overview = overview;
      this.vote_average = vote_average;
      this.id = id;
    }
  }