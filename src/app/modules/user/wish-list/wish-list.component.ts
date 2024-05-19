import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { WishList } from 'src/app/interfaces/models/WishList';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  @Input() wishList$!: Observable<Product[]>;
  @Output() deleteProductEvent = new EventEmitter<Product>();

  deleteFromWishList(product: Product) {
    this.deleteProductEvent.emit(product);
  }
}
