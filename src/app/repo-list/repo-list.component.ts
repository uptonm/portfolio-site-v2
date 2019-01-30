import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos: [] = [];
  sub: any;
  constructor(private repoService: RepoService) {}

  ngOnInit(): void {
    this.sub = this.repoService.getRepos().subscribe((repos: []) => {
      this.repos = repos;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
