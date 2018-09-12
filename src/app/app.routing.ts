import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    // ...homeRoutes,
    // ...loginRoutes,    
    { path: 'products', loadChildren: './components/product/product.module#ProductModule' }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: false });