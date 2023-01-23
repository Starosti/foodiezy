import { Component, Input } from '@angular/core';
import { Food } from 'src/app/model/Food';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent {
  @Input() foods: Food[] = [];
  @Input() searchTerm!: string;
  @Input() selectedTag!: string;
  faFaceFrown = faFaceFrown;
  constructor() {}
}
