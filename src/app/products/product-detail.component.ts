import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from './products.service'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail'
  product: IProduct

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.productService.getProductById(id).subscribe(product => {
      this.product = product
      console.log(product)
    })
  }
  onBack(): void {
    this.router.navigate(['/products-list'])
  }
}
