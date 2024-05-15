import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TussendoortjesComponent } from './tussendoortjes.component';

describe('TussendoortjesComponent', () => {
  let component: TussendoortjesComponent;
  let fixture: ComponentFixture<TussendoortjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TussendoortjesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TussendoortjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
