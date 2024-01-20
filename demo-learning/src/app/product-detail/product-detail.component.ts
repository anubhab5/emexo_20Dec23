import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'ss-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductService
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.getProductDetail();
  }

  getProductDetail() {
    this.productSvc.getProductById(this.productId).subscribe((resp) => {
      debugger;
    });
  }
}
