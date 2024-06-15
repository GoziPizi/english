import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBenefitComponent } from './key-benefit.component';

describe('KeyBenefitComponent', () => {
  let component: KeyBenefitComponent;
  let fixture: ComponentFixture<KeyBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyBenefitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
