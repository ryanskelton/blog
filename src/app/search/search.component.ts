import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../service/api-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: any;
  currentPageNumber = 1;
  recordPerPage = 10;
  filter = '';
  constructor(public _apiService: ApiServiceService) { }

  ngOnInit() {
    this._apiService.getAllPostData().subscribe((res: any) => {
      console.log(res);
      this.posts = res;
    });
  }
}
