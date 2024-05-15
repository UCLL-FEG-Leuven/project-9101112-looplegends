import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertenComponent } from './desserten.component';

describe('DessertenComponent', () => {
  let component: DessertenComponent;
  let fixture: ComponentFixture<DessertenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DessertenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
