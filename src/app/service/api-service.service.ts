import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiServiceService {

  constructor(public _http: HttpClient) { }

  getAllPostData() {
    return this._http.get('http://jsonplaceholder.typicode.com/posts');
  }

  getPost(id) {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);   
  }

  getUser(id) {
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`);   
  }
}
