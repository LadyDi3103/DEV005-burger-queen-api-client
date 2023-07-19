import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminService } from 'src/app/services/AdminService/admin.service';
@Component({
    selector: 'app-delete-product-modal',
    templateUrl: './delete-product-modal.component.html',
    styleUrls: ['./delete-product-modal.component.css']
})
export class DeleteProductModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { }

}