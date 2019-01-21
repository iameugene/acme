import { NgModule } from '@angular/core'
import { ProductsComponent } from './products.component'
import { ProductDetailComponent } from './product-detail.component'
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-space'
import { RouterModule } from '@angular/router'
import { ProductsDetailGuard } from './products-detail.guard'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products-list', component: ProductsComponent },
      {
        path: 'product/:id',
        canActivate: [ProductsDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
