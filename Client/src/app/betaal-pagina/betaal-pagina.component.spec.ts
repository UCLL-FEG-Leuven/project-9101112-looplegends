import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaalPaginaComponent } from './betaal-pagina.component';

describe('BetaalPaginaComponent', () => {
  let component: BetaalPaginaComponent;
  let fixture: ComponentFixture<BetaalPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaalPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetaalPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
