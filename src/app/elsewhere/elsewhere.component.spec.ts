import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsewhereComponent } from './elsewhere.component';

describe('ElsewhereComponent', () => {
  let component: ElsewhereComponent;
  let fixture: ComponentFixture<ElsewhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElsewhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
