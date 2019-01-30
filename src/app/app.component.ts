import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  routeToProfile(where: string) {
    switch (where) {
      case "github":
        window.location.href = "https://github.com/uptonm";
        break;
      case "linkedin":
        window.location.href = "https://linkedin.com/in/uptonm";
        break;
      case "twitter":
        window.location.href = "https://twitter.com/mikeupton34";
        break;
      case "codepen":
        window.location.href = "https://codepen.io/uptonm";
        break;
      default:
        return;
    }
  }
}
