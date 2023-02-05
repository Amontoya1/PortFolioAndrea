import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'amr-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  @Input() images!: any;
  @Input() arrows = true;
  @Input() cellsToShow!: number;
  @Input() height!: number;
  @Input() cellsToScroll!: number;
  @Input() dots = true;
  @Output()
  public eventsCarousel: EventEmitter<any> = new EventEmitter<any>();

  public carouselArrows!: boolean;
  public carouselAutoplay!: boolean;
  public carouselCellWidth!: number;
  public carouselCellsToShow!: number;
  public carouselHeight!: number;
  public carouselWidth!: number;
  public carouselLoops!: boolean;
  public carouselCellsToScroll!: number;
  public carouselDots!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setDesktopView();

    const mobileBreakPoint = '(max-width: 425px)';
    const tabletBreakPoint = '(max-width: 768px)';

    this.breakpointObserver.observe([mobileBreakPoint, tabletBreakPoint]).subscribe((result) => {
      if (result.breakpoints[mobileBreakPoint]) {
        this.setMobileView();
      } else if (result.breakpoints[tabletBreakPoint]) {
        this.setTabletView();
      } else {
        this.setDesktopView();
      }
    });
  }

  public handleCarouselEvents(image: any) {
    this.eventsCarousel.emit(image);
  }

  private setDesktopView(): void {
    this.carouselArrows = this.arrows;
    this.carouselAutoplay = false;
    this.carouselCellsToShow = this.cellsToShow;
    this.carouselHeight = this.height * 1.25;
    this.carouselWidth = 350;
    this.carouselCellWidth = 180;
    this.carouselCellsToScroll = this.cellsToScroll;
    this.carouselDots = this.dots;
  }

  private setMobileView(): void {
    this.carouselArrows = true;
    this.carouselAutoplay = false;
    this.carouselCellsToShow = 1;
    this.carouselHeight = this.height * 1.35;
    this.carouselWidth = 270;
    this.carouselCellWidth = 180;
    this.carouselDots = this.dots;
  }

  private setTabletView(): void {
    this.carouselArrows = true;
    this.carouselAutoplay = false;
    this.carouselCellsToShow = 2;
    this.carouselHeight = this.height;
    this.carouselWidth = 300;
    this.carouselCellWidth = 180;
    this.carouselDots = this.dots;
  }
}
