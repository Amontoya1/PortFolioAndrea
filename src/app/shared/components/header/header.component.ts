import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'amr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit  {
  @ViewChild('drawer')
  sidenav: MatSidenav | any;
  public isMobile: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      )
      .subscribe((n: boolean) => {
        this.isMobile = n;
      });
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
