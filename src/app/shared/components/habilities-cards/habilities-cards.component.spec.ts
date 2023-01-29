import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitiesCardsComponent } from './habilities-cards.component';

describe('HabilitiesCardsComponent', () => {
  let component: HabilitiesCardsComponent;
  let fixture: ComponentFixture<HabilitiesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitiesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitiesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
