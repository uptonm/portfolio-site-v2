import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getRepos() {
    return this.http.get('http://localhost:8000/api/repos');
  }
}
