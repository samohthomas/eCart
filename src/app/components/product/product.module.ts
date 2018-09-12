import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

// components
import { ProductComponent } from './product.component';



// services
import { ProductService } from '../../services/product.service';

import { ProductRouting } from './product.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
        ProductRouting
    ],
    declarations: [
        ProductComponent,
    ],
    providers: [
        ProductService,       
    ]
})
export class ProductModule {}