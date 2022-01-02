/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarFinderComponent } from './carFinder.component';

describe('CarFinderComponent', () => {
  let component: CarFinderComponent;
  let fixture: ComponentFixture<CarFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
