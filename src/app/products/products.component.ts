import { ProductsService } from './products.service'
import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []
  filteredProducts: IProduct[] = []
  pageTitle = 'Product List'
  imageWidth = 50
  imageMargin = 2
  showImage = false
  errorMessage = ''
  _listFilter = ''

  constructor(private productService: ProductsService) {}

  get listFilter(): string {
    return this._listFilter
  }

  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter(
      (product: IProduct) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response
        this.filteredProducts = this.products
        console.log(this.products)
      },
      error => (this.errorMessage = <any>error)
    )
  }
}
