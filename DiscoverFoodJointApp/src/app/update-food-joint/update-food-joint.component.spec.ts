import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodJointComponent } from './update-food-joint.component';

describe('UpdateFoodJointComponent', () => {
  let component: UpdateFoodJointComponent;
  let fixture: ComponentFixture<UpdateFoodJointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoodJointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFoodJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
