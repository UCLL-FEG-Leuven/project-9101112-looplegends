import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilInFieldComponent } from './fil-in-field.component';

describe('FilInFieldComponent', () => {
  let component: FilInFieldComponent;
  let fixture: ComponentFixture<FilInFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilInFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilInFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
