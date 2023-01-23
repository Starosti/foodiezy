import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  changeCartQuantity(data: any) {
    this.cartService.changeQuantity(data.foodId, data.quantity);
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
}
