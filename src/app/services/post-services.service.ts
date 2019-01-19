import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  private posts: any[];

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createpostservices(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatepostservices (post) {
    return this.http.put(this.url + '/' + post.id , post);
  }

  DeletPostServices (post) {
    return this.http.put(this.url + '/' + post.id , post);
  }
}
