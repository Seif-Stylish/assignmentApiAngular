import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFormComponent } from './our-form.component';

describe('OurFormComponent', () => {
  let component: OurFormComponent;
  let fixture: ComponentFixture<OurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
