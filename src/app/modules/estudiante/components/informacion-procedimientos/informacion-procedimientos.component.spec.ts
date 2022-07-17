import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionProcedimientosComponent } from './informacion-procedimientos.component';

describe('InformacionProcedimientosComponent', () => {
  let component: InformacionProcedimientosComponent;
  let fixture: ComponentFixture<InformacionProcedimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionProcedimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
