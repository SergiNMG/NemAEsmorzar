import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/interfaces/models/Place';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  placeList: Place[] = [];
  addProductForm!: FormGroup;
  formValue: any;
  selectedValue!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private placeService: PlaceService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getPlaces();
    this.generateAddProductForm();
  }

  getPlaces() {
    this.placeService.places$.subscribe({
      next: (places) => {
        this.placeList = places;
      },
      error: (error) => {
        console.error('Error while getting places', error);
      },
    });
  }

  generateAddProductForm() {
    this.addProductForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      description: [null, [Validators.required, Validators.maxLength(200)]],
      price: [null, [Validators.required, Validators.max(100)]],
      rating: [
        null,
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
      placeId: [null, [Validators.required]],
    });
  }

  getErrorMessage(field: string) {
    const formControl = this.addProductForm.get(field);
    if (!formControl) return '';
    if (formControl.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (formControl.hasError('maxLength')) {
      return 'Máximo de caracteres excedido';
    }
    if (formControl.hasError('max')) {
      return 'El valor máximo permitido es 5';
    }
    if (formControl.hasError('min')) {
      return 'El valor mínimo permitido es 0';
    }
    return '';
  }

  submitProduct() {
    this.formValue = this.addProductForm.value;
  }

  submitForm() {
    if (this.addProductForm.valid) {
      this.productService
        .addProduct(this.addProductForm.value)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  }
}
