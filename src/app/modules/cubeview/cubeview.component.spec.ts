import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeviewComponent } from './cubeview.component';

describe('CubeviewComponent', () => {
  let component: CubeviewComponent;
  let fixture: ComponentFixture<CubeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
