import { Component } from '@angular/core'
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs'
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false
  loggedUser:any = null
  constructor(private authService: AuthService) {
    this.authService.isLoged().subscribe(result=>{
      if(result && result.uid) {
        this.loggedIn = true
        setTimeout(()=>{
          this.loggedUser = this.authService.getUser().currentUser.email
        }, 500)
      }else {
        this.loggedIn = false
      }
    }, error=> {
      this.loggedIn = false
    })
  }

  logout() {
    this.authService.logout()
  }
}
