import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodJointDetailComponent } from './food-joint-detail.component';

describe('FoodJointDetailComponent', () => {
  let component: FoodJointDetailComponent;
  let fixture: ComponentFixture<FoodJointDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodJointDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodJointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
