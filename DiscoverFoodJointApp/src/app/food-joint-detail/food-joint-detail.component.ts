import { map } from 'rxjs/operators';
import { FoodJointService } from './../service/food-joint.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodJoint } from '../model/FoodJoint';

@Component({
  selector: 'app-food-joint-detail',
  templateUrl: './food-joint-detail.component.html',
  styleUrls: ['./food-joint-detail.component.css']
})
export class FoodJointDetailComponent implements OnInit {

  foodJoint: FoodJoint;
  message:string=""; 

  constructor(
    private service: FoodJointService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFoodJointDetails();
  }

  getFoodJointDetails() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != "" || id != null) {
      this.service.getFoodJointDetails(Number(id)).pipe(
        map(response=> {        
          this.foodJoint = response;         
          this.service.getCity(response.cityId).subscribe(
           (res)=> {          
             const cityInfo = res.cityName + ', ' + res.state + ', ' + res.country;  
             this.foodJoint.cityDetail = cityInfo;     
            }
         )
         localStorage.clear();
         localStorage.setItem('foodJoint', JSON.stringify(this.foodJoint));
        })
      ).subscribe()
    }
    else
    {
      this.message = "Please provide valid id..."
    }
  }
}
