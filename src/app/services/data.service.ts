import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
    console.log('Data Service connected....');
   }

   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts'); // HTTP get
   }
}
