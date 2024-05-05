import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products!: Product[];
}
