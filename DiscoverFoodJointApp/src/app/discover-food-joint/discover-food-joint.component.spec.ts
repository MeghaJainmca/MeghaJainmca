import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFoodJointComponent } from './discover-food-joint.component';

describe('DiscoverFoodJointComponent', () => {
  let component: DiscoverFoodJointComponent;
  let fixture: ComponentFixture<DiscoverFoodJointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverFoodJointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFoodJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
