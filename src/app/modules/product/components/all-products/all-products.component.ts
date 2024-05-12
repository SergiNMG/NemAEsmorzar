import { Component, Input } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';
import { Product } from 'src/app/interfaces/models/Product';
import { PlaceService } from 'src/app/services/place/place.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  @Input() productList!: Product[];
}
