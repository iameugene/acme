import { InMemoryProductDataService } from './products/in-memory-product-data-service.service'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { ProductModule } from './products/product.module'

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryProductDataService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot(appRoutes),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
