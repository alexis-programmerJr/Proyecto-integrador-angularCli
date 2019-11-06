import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasPComponent } from './mas-p.component';

describe('MasPComponent', () => {
  let component: MasPComponent;
  let fixture: ComponentFixture<MasPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
