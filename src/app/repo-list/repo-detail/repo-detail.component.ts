import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../shared/repo.interface';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input() repo: Repo;
  cloneType: string = 'https';
  showClone: boolean = false;
  constructor() {}

  ngOnInit() {}

  routeTo(route: string) {
    if (route === '/star') {
      window.location.href = this.repo.url;
    }
    window.location.href = `${this.repo.url}${route}`;
  }

  getValue() {
    if (this.cloneType === 'https') {
      return this.repo.url + '.git';
    }
    return (
      'git@github.com:' +
      this.repo.url.substring(
        this.repo.url.indexOf('.com') + 5,
        this.repo.url.length
      ) +
      '.git'
    );
  }

  toggleShowClone() {
    this.showClone = !this.showClone;
  }
}
