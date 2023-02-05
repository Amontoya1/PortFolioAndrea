import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'habilidades',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'contact',
    component: ContactComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
