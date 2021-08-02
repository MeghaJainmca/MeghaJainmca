import { RemoveFoodJointComponent } from './remove-food-joint/remove-food-joint.component';
import { UpdateFoodJointComponent } from './update-food-joint/update-food-joint.component';
import { AddFoodJointComponent } from './add-food-joint/add-food-joint.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverFoodJointComponent } from './discover-food-joint/discover-food-joint.component';
import { FoodJointDetailComponent } from './food-joint-detail/food-joint-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/food-joint-list', pathMatch:'full'},
  {path:'food-joint-list', component:DiscoverFoodJointComponent},
  {path:'food-joint-details/:id', component:FoodJointDetailComponent},
  {path:'add-food-joint', component:AddFoodJointComponent},
  {path:'update-food-joint/:id', component:UpdateFoodJointComponent},
  {path:'remove-food-joint/:id', component:RemoveFoodJointComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
