import { ConvertToSpacesPipe } from './shared/pipes/convert-to-space'
import { InMemoryProductDataService } from './products/in-memory-product-data-service.service'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ProductsComponent } from './products/products.component'
import { StarComponent } from './star/star.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { ProductDetailComponent } from './products/product-detail.component'

const appRoutes: Routes = [
  { path: 'products-list', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryProductDataService, {
      dataEncapsulation: false,
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
