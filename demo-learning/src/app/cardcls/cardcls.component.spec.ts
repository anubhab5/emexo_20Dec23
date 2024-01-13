import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardclsComponent } from './cardcls.component';

describe('CardclsComponent', () => {
  let component: CardclsComponent;
  let fixture: ComponentFixture<CardclsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardclsComponent]
    });
    fixture = TestBed.createComponent(CardclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
