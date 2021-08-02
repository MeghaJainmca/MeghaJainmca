import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../model/city';
import { FoodJointService } from '../service/food-joint.service';

@Component({
  selector: 'app-add-food-joint',
  templateUrl: './add-food-joint.component.html',
  styleUrls: ['./add-food-joint.component.css']
})
export class AddFoodJointComponent implements OnInit {

  submitted: boolean = false;  
  foodJointFrom: FormGroup;
  selectedCityId:number;
  cityData:Array<City>;

  constructor(
    public fb:FormBuilder,
    private service: FoodJointService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.foodJointFrom = this.fb.group({
      jointName: ['', Validators.required],
      foodType: ['',Validators.required],
      address: ['',Validators.required],      
      cityId: ['',[Validators.required]]
    });
    this.getAllCities();   
  }

  getAllCities() {

    this.service.getCities().subscribe(
      (response) => {       
        this.cityData  =  response;     
      },
      (error) => { console.error("error") })
  }

  addNewFoodJoint() {
    this.submitted = true;
    if(this.foodJointFrom.valid)
    { 
    this.service.createFoodJoint(this.foodJointFrom.value).subscribe(
      res => {
        console.log('New FoodJoint added successfully');       
       this.router.navigate(['']);      
      }
    );
    }
  }

  get myForm(){
    return this.foodJointFrom.controls;
  }
}
