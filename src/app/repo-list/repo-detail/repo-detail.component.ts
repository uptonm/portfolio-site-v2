import { Component, OnInit, Input } from "@angular/core";
import { Repo } from "../../shared/repo.interface";

@Component({
  selector: "app-repo-detail",
  templateUrl: "./repo-detail.component.html",
  styleUrls: ["./repo-detail.component.css"]
})
export class RepoDetailComponent implements OnInit {
  @Input() repo: Repo;
  cloneType: string = "https";
  showClone: boolean = false;
  constructor() {}

  ngOnInit() {
    console.log(this.timeSince(this.repo.last_update.timestamp));
  }

  appendImage(url: string) {
    return url + ".png";
  }

  routeTo(route: string) {
    if (route === "/star") {
      window.location.href = this.repo.url;
    } else if (route === "/profile") {
      window.location.href = `https://github.com/${
        this.repo.last_update.author.username
      }`;
    } else {
      window.location.href = `${this.repo.url}${route}`;
    }
  }

  getValue() {
    if (this.cloneType === "https") {
      return this.repo.url + ".git";
    }
    return (
      "git@github.com:" +
      this.repo.url.substring(
        this.repo.url.indexOf(".com") + 5,
        this.repo.url.length
      ) +
      ".git"
    );
  }

  toggleShowClone() {
    this.showClone = !this.showClone;
  }

  timeSince(date: string): string {
    var time = new Date().valueOf() - new Date(date).valueOf();
    let timeDiff = {
      months: new Date(time).getMonth(),
      days: new Date(time).getDate(),
      hours: new Date(time).getHours(),
      minutes: new Date(time).getMinutes(),
      seconds: new Date(time).getSeconds()
    };
    if (timeDiff.months >= 1) {
      return timeDiff.months === 1
        ? "Committed about a month ago"
        : `Committed ${timeDiff.months} months ago`;
    } else if (timeDiff.days >= 1) {
      return timeDiff.days === 1
        ? "Committed sometime yesterday"
        : `Committed ${timeDiff.days} days ago`;
    } else if (timeDiff.hours >= 1) {
      return timeDiff.hours === 1
        ? "Committed about an hour ago"
        : `Committed ${timeDiff.hours} hours ago`;
    } else if (timeDiff.minutes >= 1) {
      return timeDiff.minutes === 1
        ? "Committed about a minute ago"
        : `Committed ${timeDiff.minutes} minutes ago`;
    } else {
      return "Committed just now";
    }
  }
}
