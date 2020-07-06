import { async, TestBed } from '@angular/core/testing';
import { Lib3Module } from '@circular-import-demo/lib3';
import { Lib4Module } from './lib4.module';

describe('AdminLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib3Module, Lib4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib4Module).toBeDefined();
  });
});
