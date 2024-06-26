import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonComponent } from './bon.component';

describe('BonComponent', () => {
  let component: BonComponent;
  let fixture: ComponentFixture<BonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
