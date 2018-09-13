import { Component,Input,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: `./product-list.directive.html`
})
export class ProductListDirective implements OnChanges{
  @Input() products =[];
  @Output() addToCart = new EventEmitter<{ pId: String }>();
  @Output() viewProductDetails = new EventEmitter<{ pId: String }>();

  constructor() { }

  ngOnChanges(products){
    // if(item.products)
    // alert("Change");
  }

  addCart(productId:String){
    this.addToCart.emit({pId:productId});
  }

  productDetails(productId:String){
    this.viewProductDetails.emit({pId:productId});
  }


}
