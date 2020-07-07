import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'

// uncomment the following import in order to use Lodash
// import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies : any={};
  movieName : string;
  
  constructor(private apiService : ApiService) {}

  ngOnInit()
  {
   
   this.getMovies();

  }

  getMovies()
  {
    this.apiService.getMovies().subscribe(( movies:{}) =>
      {
        this.movies = movies;
        
      })
  }

  searchMovie(movieName)
  {
    this.apiService.searchMovie(movieName).subscribe((movies : {}) =>
    {
      this.movies = movies;
      console.log(this.movies);
    })
  }

  

}
