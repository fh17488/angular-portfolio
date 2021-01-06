import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void; 
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1250px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.onchange = this._mobileQueryListener; }

  ngOnInit(): void {
  }

}
