import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    for (let cartItem of this.items) {
      totalPrice += cartItem.price;
    }
    return totalPrice;
  }
}
