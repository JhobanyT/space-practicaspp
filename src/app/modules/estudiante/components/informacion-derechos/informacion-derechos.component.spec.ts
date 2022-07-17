import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDerechosComponent } from './informacion-derechos.component';

describe('InformacionDerechosComponent', () => {
  let component: InformacionDerechosComponent;
  let fixture: ComponentFixture<InformacionDerechosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionDerechosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDerechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
