import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ss-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private prodSvc: ProductService) {
    this.userForm = this.fb.group({
      productName: ['', [Validators.required]],
      productPrice: ['', [Validators.required]],
      productDescription: ['', [Validators.required, Validators.minLength(6)]],
      quantityAvailable: ['', [Validators.required]],
      isVeg: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.prodSvc.addNewProduct(this.userForm.value).subscribe((resp) => {
        console.log('product Added');
      });
      // Add your logic here to handle the form submission
    } else {
      console.log('Form is invalid');
    }
  }
}
