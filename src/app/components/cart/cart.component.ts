import { Component,Input,OnChanges,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {

  @Input() isHide :Boolean = false;
  @Input() items =[];
  @Output() addCount = new EventEmitter<{ pId: String , quantity:Number}>();
  @Output() removeProduct = new EventEmitter<{ pId: String }>();
  @Output() onClassReset = new EventEmitter();

  cartSize:Number=0;

  constructor(private router: Router) { }

  ngOnChanges(changes:SimpleChanges) {
    if(changes['items'])
      this.cartSize = this.items.length;
  }

  hideCart(){
    this.isHide = false;
    this.onClassReset.emit();
  }

  onCheckout(){
    this.isHide = false;
    this.onClassReset.emit();
    this.router.navigate(['checkout']);
  }

}
