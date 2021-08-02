import { ActivatedRoute, Router } from '@angular/router';
import { FoodJointService } from './../service/food-joint.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-remove-food-joint',
  templateUrl: './remove-food-joint.component.html',
  styleUrls: ['./remove-food-joint.component.css']
})
export class RemoveFoodJointComponent implements OnInit {

  constructor(
    private service: FoodJointService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.removeFoodJoint();
  }

  removeFoodJoint() {
    if (confirm('Do you want to sure to delete this?')) {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.service.removeFoodJoint(id).subscribe();      
    }

    this.router.navigate(['/food-joint-list']);

  }

}
