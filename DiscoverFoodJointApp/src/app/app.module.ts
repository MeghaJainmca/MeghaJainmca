import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverFoodJointComponent } from './discover-food-joint/discover-food-joint.component';
import { FoodJointDetailComponent } from './food-joint-detail/food-joint-detail.component';
import { AddFoodJointComponent } from './add-food-joint/add-food-joint.component';
import { UpdateFoodJointComponent } from './update-food-joint/update-food-joint.component';
import { RemoveFoodJointComponent } from './remove-food-joint/remove-food-joint.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverFoodJointComponent,
    FoodJointDetailComponent,
    AddFoodJointComponent,
    UpdateFoodJointComponent,
    RemoveFoodJointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
