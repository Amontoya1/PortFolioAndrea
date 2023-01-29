import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSkillsComponent } from './box-skills.component';

describe('BoxSkillsComponent', () => {
  let component: BoxSkillsComponent;
  let fixture: ComponentFixture<BoxSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
