import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToChooseHeadComponent } from './cards-container.component';

describe('CardToChooseHeadComponent', () => {
  let component: CardToChooseHeadComponent;
  let fixture: ComponentFixture<CardToChooseHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardToChooseHeadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardToChooseHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
