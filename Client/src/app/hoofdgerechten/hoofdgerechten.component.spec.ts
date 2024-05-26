import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HoofdgerechtenComponent } from './hoofdgerechten.component';

describe('HoofdgerechtenComponent', () => {
  let component: HoofdgerechtenComponent;
  let fixture: ComponentFixture<HoofdgerechtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoofdgerechtenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HoofdgerechtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
