import { delay, from, interval, map, mergeMap, Observable, zip } from 'rxjs';
import { Food } from 'src/app/model/Food';

const foods: Food[] = [
  {
    id: 1,
    imgUrl: '/assets/food/food-1.jpg',
    name: 'Pizza',
    price: 5,
    tags: ['Fast Food', 'Italian'],
  },
  {
    id: 2,
    imgUrl: '/assets/food/food-2.jpg',
    name: 'Meatballs',
    price: 20,
    tags: ['Swedish'],
  },
  {
    id: 3,
    imgUrl: '/assets/food/food-3.jpg',
    name: 'Hamburger',
    price: 5,
    tags: ['Fast Food'],
  },
  {
    id: 4,
    imgUrl: '/assets/food/food-4.jpg',
    name: 'Fries',
    price: 5,
    tags: ['Fast Food'],
  },
  {
    id: 5,
    imgUrl: '/assets/food/food-1.jpg',
    name: 'Hatay Usulü Tavuk Döner',
    price: 100000,
    tags: ['Italian', 'Fast Food', 'Vegetarian'],
  },
  {
    id: 6,
    imgUrl: '/assets/food/food-5.jpg',
    name: 'Chicken Soup',
    price: 5,
    tags: [],
  },
  {
    id: 7,
    imgUrl: '/assets/food/food-6.jpg',
    name: 'Vegan Pizza',
    price: 25,
    tags: ['Italian', 'Vegetarian', 'Vegan'],
  },
  {
    id: 9,
    imgUrl: '/assets/food/food-6.jpg',
    name: 'Test Pizza',
    price: 1234.12,
    tags: [
      'A',
      'lot',
      'of',
      'tags',
      'for',
      'test',
      'pizza',
      'mmm',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
      'delicious',
    ],
  },
];

//delay to simulate a real stream
const foodsStream: Observable<Food> = zip(from(foods), interval(10)).pipe(
  map(([x, y]) => x)
);

export default foodsStream;
