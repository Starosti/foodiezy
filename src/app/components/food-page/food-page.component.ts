import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { CartItem } from 'src/app/model/CartItem';
import { Food } from 'src/app/model/Food';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  food!: Food;
  inCart!: CartItem;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((param) => {
        if (!param['id']) return;
        this.foodService
          .getFoodById(parseInt(param['id']))
          .pipe(first())
          .subscribe((food) => (this.food = food));
        this.inCart = this.cartService.getItem(this.food)!;
      })
    );
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  addToCart(event: Event) {
    (event.target as Element).classList.add('spin');
    setTimeout(() => {
      (event.target as Element).classList.remove('spin');
    }, 200);
    this.cartService.addToCart(this.food);
    this.inCart = this.cartService.getItem(this.food)!;
  }
}
