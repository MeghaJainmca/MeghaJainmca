
import { FoodJoint } from './../model/FoodJoint';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { City } from '../model/city'

@Injectable({
    providedIn: 'root'
})
export class FoodJointService {

    constructor(private http: HttpClient) {

    }

    baseUri: string = "https://localhost:44391/api/FoodJoint/";
    headers = new HttpHeaders().set('Content-Type', 'application/json');


    createFoodJoint(foodJoint: FoodJoint): Observable<any> {
        return this.http.post(this.baseUri + 'CreateFoodJoint', foodJoint, { headers: this.headers })
            .pipe(catchError(err => of('error', err)))
    }

    updateFoodJoint(id:number, foodJoint: FoodJoint): Observable<any> {
        return this.http.put(this.baseUri + `UpdateFoodJoint/${id}`, foodJoint, { headers: this.headers })
            .pipe(catchError(err => of('error', err)))
    }

    removeFoodJoint(id:number): Observable<any> {
        return this.http.delete(this.baseUri + `DeleteFoodJoint/${id}`)
            .pipe(catchError(err => of('error', err)))
    }

    getFoodJoints(): Observable<FoodJoint[]> {
        return this.http.get<FoodJoint[][]>(this.baseUri + 'GetFoodJoints')
            .pipe(
                map((res) => {
                    return res || {};
                }),
                catchError(err => of('error', err)))
    }

    getFoodJointsByCity(id:number):Observable<FoodJoint[]>  {
        return this.http.get<FoodJoint[]>(this.baseUri + `GetFoodJointsByCity/${id}`);
     }

     getCities(): Observable<City[]> {
        return this.http.get<City[][]>(this.baseUri + 'GetCities')
            .pipe(
                map((res) => {
                    return res || {};
                }),
                catchError(err => of('error', err)))
    }

    getFoodJointDetails(id:number):Observable<FoodJoint> {
        return this.http.get<FoodJoint>(this.baseUri + `GetFoodJointsDetails/${id}`);
    }

    getCity(id:number):Observable<City>  {
        return this.http.get<City>(this.baseUri + `GetCity/${id}`);
     }

}