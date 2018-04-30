import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from './../service/api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData: any;
  constructor(public _apiService: ApiServiceService, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this._apiService.getPost(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res)
      this.postData = res;
    }, (err) => {
      console.log(err)
    })
  }

}
