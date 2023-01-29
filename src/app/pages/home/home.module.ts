import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComponentsModule,
    HomeRoutingModule 
  ]
})
export class HomeModule { }
