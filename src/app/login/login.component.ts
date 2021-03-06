import { Component } from '@angular/core'
import { AuthService } from '../services/auth.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html'
})
export class LoginComponent {
	user:any = {}
	constructor(private authService:AuthService){}

	login() {
		this.authService.login(this.user.email, this.user.password)
	}
}
