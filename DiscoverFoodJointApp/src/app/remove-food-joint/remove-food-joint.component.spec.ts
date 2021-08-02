import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFoodJointComponent } from './remove-food-joint.component';

describe('RemoveFoodJointComponent', () => {
  let component: RemoveFoodJointComponent;
  let fixture: ComponentFixture<RemoveFoodJointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFoodJointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFoodJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
