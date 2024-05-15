import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkenComponent } from './drinken.component';

describe('DrinkenComponent', () => {
  let component: DrinkenComponent;
  let fixture: ComponentFixture<DrinkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
