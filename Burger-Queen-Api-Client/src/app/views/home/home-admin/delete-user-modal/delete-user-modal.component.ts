import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/AdminService/admin.service';
import { DataUserEdit } from '../../../../interfaces/interfaces';



@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css']
})
export class DeleteUserModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) { }
id:number= 1;
  delete():void{


    this.adminService.deleteUser(this.id).subscribe((resp) =>{
      console.log(resp, 'RESP DELETE');
      
    })
  }
}
