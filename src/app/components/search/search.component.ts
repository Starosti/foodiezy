import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  searchTerm: string = '';

  faXmark = faXmark;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  clear(): void {
    this.router.navigateByUrl('/');
  }
}
