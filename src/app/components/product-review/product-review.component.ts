import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-container',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Output() addToCart = new EventEmitter<{ pId: String }>();

  private productId: String = '';
  private product: Object = {};


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.productId = params['p_id'] || '';

        console.log('Query param page: ', this.productId);
      });

    console.log('PRODUCT REVIEW CALLED');
    this.getProductDetails(this.productId);

  }

  getProductDetails(id) {
    this.productService.showProduct(id).then((res) => {
      if (res['status'])
        this.product = res['data'];
    }, (err) => {
      console.log(err);
    });
  }


  addCart(productId: String) {
    this.router.navigate(['/checkout']);
  }

}
