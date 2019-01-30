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

  appendImage(url: string) {
    return url + '.png';
  }

  routeTo(route: string) {
    if (route === '/star') {
      window.location.href = this.repo.url;
    } else if (route === '/profile') {
      window.location.href = `https://github.com/${
        this.repo.last_update.author.username
      }`;
    } else {
      window.location.href = `${this.repo.url}${route}`;
    }
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
