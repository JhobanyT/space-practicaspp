import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionOtrosComponent } from './informacion-otros.component';

describe('InformacionOtrosComponent', () => {
  let component: InformacionOtrosComponent;
  let fixture: ComponentFixture<InformacionOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionOtrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
