import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardtestComponent } from './keyboardtest.component';

describe('KeyboardtestComponent', () => {
  let component: KeyboardtestComponent;
  let fixture: ComponentFixture<KeyboardtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
