import { Injectable, OnDestroy } from '@angular/core';
import {
  delay,
  filter,
  from,
  interval,
  Observable,
  Subscription,
  tap,
} from 'rxjs';
import { Food } from 'src/app/model/Food';
import foodsStream from './mockFood';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods$: Observable<Food>;
  foods: Food[] = [];
  /**
   * If this application were used in production, this
   * would pull data from the API and display those
   * to the user.
   * For development purposes, this just uses some mock
   * data I made up to not rely on an API.
   */

  constructor() {
    this.foods$ = foodsStream.pipe(tap((food) => this.foods.push(food)));
  }

  getAllFoods(): Observable<Food> {
    return this.foods$;
  }

  getAllFoodsByName(name: string): Observable<Food> {
    return this.getAllFoods().pipe(
      filter((food) => food.name.toLowerCase().includes(name.toLowerCase()))
    );
  }

  getAllFoodsByTag(searchTag: string): Observable<Food> {
    return this.getAllFoods().pipe(
      filter((food) => {
        let hasTag = false;
        food.tags.every((tag) => {
          hasTag = tag.toLowerCase() === searchTag.toLowerCase();
          return !hasTag;
        });
        return hasTag;
      })
    );
  }

  getFoodById(id: number): Observable<Food> {
    return this.getAllFoods().pipe(filter((food) => food.id == id));
  }
}
