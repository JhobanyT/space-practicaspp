import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionRequisitosComponent } from './informacion-requisitos.component';

describe('InformacionRequisitosComponent', () => {
  let component: InformacionRequisitosComponent;
  let fixture: ComponentFixture<InformacionRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionRequisitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
