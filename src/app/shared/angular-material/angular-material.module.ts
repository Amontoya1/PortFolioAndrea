import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';



const components = [
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule,
  MatRadioModule,
  MatExpansionModule,
  MatRadioModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatGridListModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  FormsModule,
  MatAutocompleteModule,
  MatIconModule,
  MatDialogModule
];


@NgModule({
  exports: [...components],
  declarations: [],
  imports: [CommonModule, RouterModule, ...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngularMaterialModule { }
