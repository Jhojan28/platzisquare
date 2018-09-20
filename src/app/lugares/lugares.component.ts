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
	constructor(private lugaresService:LugaresService) {
		lugaresService.getLugares()
			.subscribe(lugares=>{
				this.lugares = lugares
			})
	}
}
