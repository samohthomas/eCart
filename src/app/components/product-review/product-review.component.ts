import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Output() addToCart = new EventEmitter<{ pId: String }>();
  
   private productId : String='';

  constructor(private route: ActivatedRoute ,private router : Router) { }

  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.productId = params['p_id'] || '';

      console.log('Query param page: ', this.productId);
    });

    console.log('PRODUCT REVIEW CALLED');
  }


  addCart(productId:String){
    this.router.navigate(['/checkout']);
  }

}
