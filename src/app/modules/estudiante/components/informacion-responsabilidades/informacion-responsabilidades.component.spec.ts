import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionResponsabilidadesComponent } from './informacion-responsabilidades.component';

describe('InformacionResponsabilidadesComponent', () => {
  let component: InformacionResponsabilidadesComponent;
  let fixture: ComponentFixture<InformacionResponsabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionResponsabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionResponsabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
