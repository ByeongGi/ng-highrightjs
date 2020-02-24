import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighrightComponent } from './highright.component';

describe('HighrightComponent', () => {
  let component: HighrightComponent;
  let fixture: ComponentFixture<HighrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
