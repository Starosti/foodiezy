import { Injectable } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { Food } from 'src/app/model/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart;

  constructor() {
    this.cart = new Cart();
  }

  addToCart(food: Food) {
    let foundItem = this.cart.items.find((item) => item.food.id === food.id);
    foundItem ? foundItem.quantity++ : this.cart.items.push(new CartItem(food));
  }

  hasItem(food: Food) {
    return !!this.cart.items.find((item) => item.food.id == food.id);
  }

  getItem(food: Food) {
    return this.cart.items.find((item) => item.food.id == food.id);
  }

  removeFromCart(foodId: number) {
    console.log('removing food id=' + foodId);
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number) {
    let foundItem = this.cart.items.find((item) => item.food.id === foodId)!;
    if (foundItem) {
      foundItem.quantity = quantity;
      if (foundItem.quantity < 1) this.removeFromCart(foodId);
    }
  }

  getCart(): Cart {
    return this.cart;
  }
}
