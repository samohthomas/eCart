import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
export const productRoutes: Routes = [

	{ path: '', children: [
		{ path: '', component: ProductComponent, canActivate: [] },
        // { path: 'list', component: ResultComponent, canActivate: [] }
    ]}];

    export const ProductRouting = RouterModule.forChild(productRoutes);