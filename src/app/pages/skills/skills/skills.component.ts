import { SelectCertificadoComponent } from './../select-logo-institution/select-cert.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICarouselItem } from 'src/app/shared/components/carousel/slide.interface';
import { CAROUSEL_DATA_ITEMS_HOME } from 'src/app/shared/const/carousel.const';

@Component({
  selector: 'amr-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public imageObjects: ICarouselItem[] = CAROUSEL_DATA_ITEMS_HOME;

  private selectDialogLogo!: MatDialogRef<SelectCertificadoComponent>;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }





  public openSelectLogotDialog(event: ICarouselItem[]): void {
    this.selectDialogLogo! = this.dialog.open(SelectCertificadoComponent, {
      width: '50rem',
      maxWidth: '100%',
      closeOnNavigation: true,
      data: {
        cert: event,
      },
      panelClass: 'modal-component',
    });
  }

  public handleCarouselEvents(event: ICarouselItem[]): void {
    this.openSelectLogotDialog(event);
  }

}
