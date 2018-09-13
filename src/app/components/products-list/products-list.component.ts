import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-container',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products = [];
  public productLength: Number = 0;
  category: String;

  array = [];
  sum = 5;
  throttle = 5;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.category = params['category'] || '';

        console.log('Query param page: ', this.category);
      });
    // this.getProductList();
    this.appendItems(0, this.sum);

  }

  getProductList(startIndex, endIndex, _method) {
    this.productService.getAllProducts().then((res) => {
      if (res['status'])
        res['data'].map(item => this.products[_method](item));

      console.log(JSON.stringify(this.products));
      this.productLength = this.products.length;

    }, (err) => {
      console.log(err);
    });
  }


  // addItems(startIndex, endIndex, _method) {
  //   for (let i = 0; i < this.sum; ++i) {
  //     this.array[_method]([i, ' ', 'HIIII'].join(''));
  //   }
  //   alert(this.array.length);
  // }

  appendItems(startIndex, endIndex) {
    this.getProductList(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.getProductList(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down'
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }

  OnAction(item) {
    this.router.navigate(['/checkout']);
  }

  showProductDetails(item) {
    this.router.navigate(['/product/'], { queryParams: { p_id: item['pId'] } });
  }
}

