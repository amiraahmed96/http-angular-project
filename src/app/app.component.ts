import { Component, OnInit } from '@angular/core';
import { PostServicesService } from './services/post-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: any[];

  constructor (private postServices: PostServicesService) {}

  ngOnInit(): void {
    this.postServices.getPosts().subscribe(Response => {
      this.posts = Response.json();
    });
  }

  createpost(input: HTMLInputElement) {
    // tslint:disable-next-line:prefer-const
    let post = {title: input.value, id: ''};
    this.postServices.createpostservices(post).subscribe(Response => {
      this.posts.splice(0, 0, post);
    });
  }

  updatepost (post, inputtitle) {
    // tslint:disable-next-line:prefer-const
    let updatedpost = {title: inputtitle, id: post.id};
    this.postServices.updatepostservices(updatedpost).subscribe(Response => {
      // tslint:disable-next-line:prefer-const
      let index = this.posts.indexOf(post);
      this.posts[index] = Response.json();
    });
  }

  DeletPost (post) {
    // tslint:disable-next-line:prefer-const
    let index = this.posts.indexOf(post);
    this.postServices.DeletPostServices(post).subscribe(Response => {
      this.posts.splice(index, 1);
    });
  }
}
