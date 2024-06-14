import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerLandingComponent } from './beginner-landing.component';

describe('BeginnerLandingComponent', () => {
  let component: BeginnerLandingComponent;
  let fixture: ComponentFixture<BeginnerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeginnerLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeginnerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
