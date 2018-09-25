import { Component } from '@angular/core'
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  	selector: 'app-crear',
  	templateUrl: './crear.component.html'
})
export class CrearComponent {
	lugar:any = {}
	error = null
	id:any = null
	constructor(private lugaresService:LugaresService, private route: ActivatedRoute) {
		this.id = this.route.snapshot.params['id']
		if(this.id != 'new'){
			this.lugaresService.getLugar(this.id).subscribe(lugar=>{
				this.lugar = lugar.payload.data();
			})
			//Get from http method
			/*this.lugaresService.getLugar().subscribe(lugar => {
				//debugger;
				this.lugar = lugar;
				this.lugar = Object.keys(this.lugar).map((key) => {
					this.lugar[key]
					Object.assign(this.lugar[key], { id: key })
					return this.lugar[key]
				});
				this.lugar.forEach(lugar => {
					if(lugar.id == this.id) this.lugar = lugar
				});
				console.log(this.lugar); 
			  }, (error) =>{
				this.error = "Lo sentimos hubo una excepción, excepción: " + error.errorText;
			  });*/
		}
	}

	guardarLugar() {
		let direccion = `${this.lugar.calle},${this.lugar.ciudad},${this.lugar.pais}`
		
		//this.lugaresService.obtenerGeoData(direccion).subscribe(result=>{			
		if(this.id != 'new'){
			this.lugaresService.editarLugar(this.id, this.lugar)
			alert('Negocio editado con exito')
		} else {
			this.lugaresService.guardarLugar(this.lugar)
			alert('Negocio guardado con exito')
		}
		this.lugar = {}
		//})		
	}
}
