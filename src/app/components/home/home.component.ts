import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/model/Food';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @Output() foods: Food[] = [];
  dispose$ = new Subject<void>();
  searchTerm!: string;
  selectedTag!: string;
  faClose = faClose;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let food$!: Observable<Food>;

      this.searchTerm = params['searchTerm'];
      this.selectedTag = params['selectedTag'];

      if (params['searchTerm']) {
        // search term
        food$ = this.foodService.getAllFoodsByName(params['searchTerm']);
        document.getElementById('searchInput')?.focus();
      } else if (params['selectedTag']) {
        // selected tag
        food$ = this.foodService.getAllFoodsByTag(params['selectedTag']);
      } else {
        // no filtration
        food$ = this.foodService.getAllFoods();
      }
      food$
        .pipe(takeUntil(this.dispose$))
        .subscribe((food) => this.foods.push(food));
    });
  }

  ngOnDestroy(): void {
    this.dispose$.next();
  }
}
