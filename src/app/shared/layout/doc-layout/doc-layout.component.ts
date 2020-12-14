import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-doc-layout',
  templateUrl: './doc-layout.component.html',
  styleUrls: ['./doc-layout.component.scss']
})
export class DocLayoutComponent implements OnInit {
  url;

  facilitiesSubMenu = {
    "View": "",
    "Map": ""
  }

  constructor(private route: ActivatedRoute,) {

    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));

    url.subscribe(url => this.url = url);
    // url.toPromise().then(data => console.log(data))
    // this.route
    //   .queryParamMap
    //   .pipe(map(params => params.get('login_attempt') || 'None')).subscribe(res => {
    //     this.isLoginAttemptFailed = res === 'failed';
    //   });
  }

  ngOnInit(): void {
    this.generateSubMenu(this.url)

  }

  generateSubMenu(url) {
    if (url === "facilities") {
      console.log(`came from /facilities`)
    } else if (url === "dashboard") {
      console.log(`came from /dashboard`)
    }
  }



}
