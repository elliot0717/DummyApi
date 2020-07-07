import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f5f5473d';

  constructor(private http : HttpClient) { }

  getMovies():Observable<any>
  {
    return this.http.get(this.API_URL);
  }
 
  searchMovie(movieName)
  {
    let API_URL2 =  "http://www.omdbapi.com/?t="+movieName+"&apikey=f5f5473d";
    return this.http.get(API_URL2)
  }

}
