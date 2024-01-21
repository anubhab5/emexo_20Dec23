import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

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
    this.productId = this.activatedRoute.snapshot.params['idx'];
    debugger;
    this.getProductDetail();
  }

  getProductDetail() {
    this.productSvc.getProductById(this.productId).subscribe((resp) => {
      debugger;
    });
  }
}
