import { Component } from '@angular/core'
import { LugaresService } from '../services/lugares.service'

@Component({
  selector: 'lugares-root',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  	lat:number = 6.1479711
	lng:number = -75.387097
	lugares = null
	error = null
	constructor(private lugaresService:LugaresService) {
		lugaresService.getLugares().subscribe(lugares=>{
			this.lugares = lugares
			this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
		}, error => {
			this.error = error
		})
	}
}
