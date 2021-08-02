import { FoodJointService } from './../service/food-joint.service';
import { Component, OnInit } from '@angular/core';
import { FoodJoint } from '../model/FoodJoint';
import { City } from '../model/city';

@Component({
  selector: 'app-discover-food-joint',
  templateUrl: './discover-food-joint.component.html',
  styleUrls: ['./discover-food-joint.component.css']
})
export class DiscoverFoodJointComponent implements OnInit {

  foodJointData: Array<FoodJoint>;
  cityData:Array<City>;
  cityId:number=0;

  constructor(private service: FoodJointService) { }

  ngOnInit(): void {
   this.getAllFoodJoints();
   this.getAllCities()
  }

  getAllFoodJoints() {

    this.service.getFoodJoints().subscribe(
      (response) => { 
        console.log(response);      
        this.foodJointData  =  response;     
      },
      (error) => { console.error("error") })
  }

  getAllCities() {

    this.service.getCities().subscribe(
      (response) => {       
        this.cityData  =  response;     
      },
      (error) => { console.error("error") })
  }

  getFoodJointsBasedOnCityId()  {
    console.log(this.cityId);
    if(this.cityId > 0)
    {
    this.service.getFoodJointsByCity(this.cityId).subscribe(
      (response)=>{
        console.log(response);      
        this.foodJointData  =  response; 
      })
    }
    else
    {
      this.getAllFoodJoints();
    }    
  }

}
