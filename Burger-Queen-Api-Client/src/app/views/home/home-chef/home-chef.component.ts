import { Component } from '@angular/core';
import { LoginModule } from '../../login/login.module';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css']
})
export class HomeChefComponent {
chefName: string = 'IndiraDavoin'

constructor(private loginService: LoginService, private router: Router){}

logout():void{
  this.router.navigateByUrl('/login');
}
}
