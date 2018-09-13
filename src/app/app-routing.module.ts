import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ProductComponent }      from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full', },
  { path: 'products', component: ProductsListComponent },
  { path: 'product', component: ProductReviewComponent },
  { path: 'pages', component: ProductReviewComponent },
  { path: 'checkout', component: CheckoutComponent },
    
];

@NgModule({
  imports : [ RouterModule.forRoot(routes , {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
