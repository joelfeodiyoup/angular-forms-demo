import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTextInputComponent } from './td-text-input.component';

describe('TdTextInputComponent', () => {
  let component: TdTextInputComponent;
  let fixture: ComponentFixture<TdTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
