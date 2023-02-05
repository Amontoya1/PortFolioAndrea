import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amr-select-cert',
  templateUrl: './select-cert.component.html',
  styleUrls: ['./select-cert.component.scss'],
})
export class SelectCertificadoComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {}
}
