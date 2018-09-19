import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare'
  lugares:any = [
    { nombre: "Floreria la Gardenia", active: true, cercania: 1, distancia: 1, plan:'pagado' },
    { nombre: "Donas la pasadita", active: true, cercania: 1, distancia: 1.8, plan:'gratuito' },
    { nombre: "Veterinaria Huellitas felices", active: true, cercania: 2, distancia: 5, plan:'gratuito' },
    { nombre: "Sushi Sushiroll", active: false, cercania: 3, distancia: 10, plan:'gratuito' },
    { nombre: "Hotel la García", active: true, cercania: 3, distancia: 35, plan:'pagado' },
    { nombre: "Zapatería el Clavo", active: true, cercania: 3, distancia: 120, plan:'gratuito' }
  ]

  lat:number = 6.1479711;
  lng:number = -75.387097;

  constructor() {}
}
