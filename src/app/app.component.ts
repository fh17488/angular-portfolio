import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  config: any;
  fullpage_api: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.onchange = this._mobileQueryListener;
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      sectionsColor: ['#492AD4', 'whitesmoke', '#492AD4', 'whitesmoke', '#492AD4', 'whitesmoke'],
      anchors: ['introduction', 'about', 'works', 'experience', 'research', 'contact'],
      css3: true,
      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin: any, destination: any, direction:any) => {
        console.log(origin.index, origin, destination);
      }

    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnDestroy(): void {

  }

}
