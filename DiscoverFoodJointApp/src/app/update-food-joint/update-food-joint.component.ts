import { FoodJoint } from './../model/FoodJoint';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { City } from '../model/city';
import { FoodJointService } from '../service/food-joint.service';

@Component({
  selector: 'app-update-food-joint',
  templateUrl: './update-food-joint.component.html',
  styleUrls: ['./update-food-joint.component.css']
})
export class UpdateFoodJointComponent implements OnInit {

  submitted: boolean = false;
  foodJointFrom: FormGroup;
  selectedCityId: number;
  cityData: Array<City>;
  foodJoint: FoodJoint;

  constructor(
    public fb: FormBuilder,
    private service: FoodJointService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (localStorage?.length > 0 && localStorage.getItem('foodJoint') != null) {
      this.foodJoint = JSON.parse(localStorage.getItem('foodJoint') || '[]');
    }
    this.foodJointFrom = this.fb.group({
      id: [this.foodJoint.id],
      jointName: [this.foodJoint.jointName, Validators.required],
      foodType: [this.foodJoint.foodType, Validators.required],
      address: [this.foodJoint.address, Validators.required],
      cityId: [this.foodJoint.cityId, [Validators.required]]
    });
    this.getAllCities();
  }

  getAllCities() {

    this.service.getCities().subscribe(
      (response) => {
        this.cityData = response;
      },
      (error) => { console.error("error") })
  }

  updateFoodJoint() {
    this.submitted = true;
    if (this.foodJointFrom.valid) {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.service.updateFoodJoint(id, this.foodJointFrom.value).subscribe(
        res => {
          console.log('FoodJoint updated successfully');
          this.router.navigate(['']);
        }
      );
    }
  }

  OnCancel() {
    this.router.navigate(['/food-joint-details/', this.myForm.id.value]);
  }

  get myForm() {
    return this.foodJointFrom.controls;
  }



}
