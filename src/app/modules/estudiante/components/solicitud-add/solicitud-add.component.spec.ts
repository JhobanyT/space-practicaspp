import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAddComponent } from './solicitud-add.component';

describe('SolicitudAddComponent', () => {
  let component: SolicitudAddComponent;
  let fixture: ComponentFixture<SolicitudAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
