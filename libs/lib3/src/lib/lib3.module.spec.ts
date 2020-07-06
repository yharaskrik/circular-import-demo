import { async, TestBed } from '@angular/core/testing';
import { Lib3Module } from './lib3.module';
import { Lib4Module } from '@circular-import-demo/lib4';

describe('AdminLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Lib3Module, Lib4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib3Module).toBeDefined();
  });
});
