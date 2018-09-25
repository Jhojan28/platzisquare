import { Component } from '@angular/core'
import { LugaresService } from '../services/lugares.service'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'lugares-root',
  templateUrl: './lugares.component.html',
  animations: [
	  trigger('contenedorAnimable', [
		  	state('inicial', style({
			  	opacity: 0
		  	})),
		  	state('final', style({
				opacity: 1
			})),
			transition('inicial => final', animate(2000)),
			transition('final => inicial', animate(1000))
	  ])
  ]
})
export class LugaresComponent {
	state = 'inicial'
  	lat:number = 6.1479711
	lng:number = -75.387097
	lugares = null
	error = null
	date = null
	constructor(private lugaresService:LugaresService) {
		this.date = new Date()
		lugaresService.getLugares().subscribe(lugares=>{
			this.lugares = lugares.map(actions => {	
				const data = actions.payload.doc.data();
				const id = actions.payload.doc.id;
				return { id, ...data }
			})
			//metodos post y get de http
			/*this.lugares = lugares
			this.lugares = Object.keys(this.lugares).map((key) => {
				this.lugares[key]
				Object.assign(this.lugares[key], { id: key })
				this.state = "final"
				return this.lugares[key]
			});*/
		}, error => {
			this.error = error
		})
	}

	animar() {
		this.state = (this.state == "final") ? "inicial" : "final"
	}

	animacionInicia(e) {
		console.log("Iniciado")
		console.log(e)
	}

	animacionTermina(e) {
		console.log("Terminado")
		console.log(e)
	}
}
