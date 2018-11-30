import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPage } from './power.page';

describe('PowerPage', () => {
  let component: PowerPage;
  let fixture: ComponentFixture<PowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
