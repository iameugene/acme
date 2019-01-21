import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { IProduct } from './product'

@Injectable({
  providedIn: 'root',
})
export class InMemoryProductDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Leaf Rake',
        code: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
      },
      {
        id: 2,
        name: 'Garden Cart',
        code: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
      },
      {
        id: 5,
        name: 'Hammer',
        code: 'TBX-0048',
        releaseDate: 'May 21, 2016',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
      },
      {
        id: 8,
        name: 'Saw',
        code: 'TBX-0022',
        releaseDate: 'May 15, 2016',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
      },
      {
        id: 10,
        name: 'Video Game Controller',
        code: 'GMG-0042',
        releaseDate: 'October 15, 2015',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl:
          'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
      },
    ]
    return { products }
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: IProduct[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11
  }
}
