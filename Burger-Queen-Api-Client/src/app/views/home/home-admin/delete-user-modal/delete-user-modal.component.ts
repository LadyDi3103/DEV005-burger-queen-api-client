import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/AdminService/admin.service';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css']
})
export class DeleteUserModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { }

}
