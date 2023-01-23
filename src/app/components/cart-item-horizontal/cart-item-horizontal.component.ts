import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/model/CartItem';
import { faMinus, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item-horizontal',
  templateUrl: './cart-item-horizontal.component.html',
  styleUrls: ['./cart-item-horizontal.component.css'],
})
export class CartItemHorizontalComponent {
  @Output() cartChangeQuantity = new EventEmitter<any>();

  faPlus = faPlus;
  faMinus = faMinus;
  faRemove = faRemove;
  @Input() item!: CartItem;

  increaseItem() {
    this.cartChangeQuantity.emit({
      foodId: this.item.food.id,
      quantity: this.item.quantity + 1,
    });
  }

  decreaseItem() {
    this.cartChangeQuantity.emit({
      foodId: this.item.food.id,
      quantity: this.item.quantity - 1,
    });
  }

  removeItem() {
    this.cartChangeQuantity.emit({
      foodId: this.item.food.id,
      quantity: 0,
    });
  }
}
