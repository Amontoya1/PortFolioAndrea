import { Component } from '@angular/core';

@Component({
  selector: 'amr-box-skills',
  templateUrl: './box-skills.component.html',
  styleUrls: ['./box-skills.component.scss'],
})
export class BoxSkillsComponent {
  public itemMain: boolean = true;
  public itemHtml: boolean = false;
  public itemNode: boolean = false;
  public itemJs: boolean = false;
  public itemTs: boolean = false;
  public itemAngular: boolean = false;
  public itemGraphql: boolean = false;
  public itemMongo: boolean = false;
  public itemMocha: boolean = false;
  public itemGit: boolean = false;
  public text = [
    'HTML',
    'Node.JS',
    'JavaScript',
    'Angular',
    'TypeScript',
    'Graphql',
    'MongoDB',
    'Mocha',
    'Git',
  ];

  ocultar(number: number) {
    if (number == 1) {
      this.itemHtml = true;
    }
    if (number == 2) {
      this.itemNode = true;
    }
    if (number == 3) {
      this.itemJs = true;
    }
    if (number == 4) {
      this.itemAngular = true;
    }
    if (number == 5) {
      this.itemTs = true;
    }
    if (number == 6) {
      this.itemGraphql = true;
    }
    if (number == 7) {
      this.itemMongo = true;
    }
    if (number == 8) {
      this.itemMocha = true;
    }
    if (number == 9) {
      this.itemGit = true;
    }
    this.itemMain = false;
  }

  mostrar() {
    this.itemMain = true;
    this.itemAngular = false;
    this.itemHtml = false;
    this.itemNode = false;
    this.itemJs = false;
    this.itemTs = false;
    this.itemGraphql = false;
    this.itemMongo = false;
    this.itemMocha = false;
    this.itemGit = false;
  }
}
