import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Component } from './lib2.component';
import { Lib1Module } from '@circular-import-demo/lib1';

describe('Lib2Component', () => {
  let component: Lib2Component;
  let fixture: ComponentFixture<Lib2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2Component],
      imports: [Lib1Module]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
