import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodJointComponent } from './add-food-joint.component';

describe('AddFoodJointComponent', () => {
  let component: AddFoodJointComponent;
  let fixture: ComponentFixture<AddFoodJointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodJointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
