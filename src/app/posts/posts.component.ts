import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../service/api-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  currentPageNumber = 1;
  recordPerPage = 10;
  constructor(public _apiService: ApiServiceService) { }

  ngOnInit() {
    this._apiService.getAllPostData().subscribe((res: any) => {
      console.log(res);
      this.posts = res;
    });
  }

}
