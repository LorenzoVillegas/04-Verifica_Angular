import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoloComponent } from './singolo.component';

describe('SingoloComponent', () => {
  let component: SingoloComponent;
  let fixture: ComponentFixture<SingoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
