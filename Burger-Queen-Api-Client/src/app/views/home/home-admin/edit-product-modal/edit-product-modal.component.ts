// import { Component, Input, Output } from '@angular/core';
// import { AdminService } from 'src/app/services/AdminService/admin.service';
// import { FormControl, FormGroup } from '@angular/forms';
// import { DataUser, DataProduct, DataUserEdit, DataProductEdit } from 'src/app/interfaces/interfaces';
// //EventEmitter//
// @Component({
//   selector: 'app-edit-product-modal',
//   templateUrl: './edit-product-modal.component.html',
//   styleUrls: ['./edit-product-modal.component.css']
// })
// export class EditProductModalComponent {
//   @Input() product: DataProduct = {} as DataProduct;
//   @Output() saveProduct = new EventEmitter<DataProduct>();

//   productForm: FormGroup = new FormGroup({
//     name: new FormControl(),
//     price: new FormControl(),
//     image: new FormControl(),
//     type: new FormControl(),
//   });
//   showModalEditProduct = true;
//   constructor(private adminService: AdminService){}

//   ngOnInit(): void {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.
//     this.productForm =new FormGroup ({
//     name: new FormControl (this.product.name),
//     price: new FormControl (this.product.price),
//     image: new FormControl (this.product.image),
//     type: new FormControl (this.product.type),
//     });
//   }
//   onSave(): void {
//     if (this.productForm.valid) {
//       const updatedProduct = { ...this.product, ...this.productForm.value };
//       this.saveProduct.emit(updatedProduct);
//     }
//   }
//   closeModal() {
//     this.showModalEditProduct = false;
//     this.productForm.reset();
//   }
// }
