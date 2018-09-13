import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Object;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    // this.productService.getAllProducts().subscribe(res => this.products = res['_body']);    
    this.productService.getAllProducts().then((res) => {
      this.products = res;
    }, (err) => {
      console.log(err);
    });
  }
}
