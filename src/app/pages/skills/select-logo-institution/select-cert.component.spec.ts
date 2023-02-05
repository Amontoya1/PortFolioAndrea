import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCertificadoComponent } from './select-cert.component';



describe('SelectCertificadoComponent', () => {
  let component: SelectCertificadoComponent;
  let fixture: ComponentFixture<SelectCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
