import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from './../service//api-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(public _apiService: ApiServiceService, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this._apiService.getUser(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res)
      this.user = res;
    }, (err) => {
      console.log(err)
    })
  }

}
