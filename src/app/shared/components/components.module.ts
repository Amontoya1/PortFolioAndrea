import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { IconComponent } from './icon/icon.component';
import { BoxSkillsComponent } from './box-skills/box-skills.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HabilitiesCardsComponent } from './habilities-cards/habilities-cards.component';
import { DetalhesProjetoComponent } from './detalhes-projeto/detalhes-projeto.component';
import { QualificationComponent } from './qualification/qualification.component';

@NgModule({
  declarations: [
    IconComponent,
    BoxSkillsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    HabilitiesCardsComponent,
    DetalhesProjetoComponent,
    QualificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [
    IconComponent,
    BoxSkillsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    HabilitiesCardsComponent,
    DetalhesProjetoComponent,
    QualificationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
