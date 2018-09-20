import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class LugaresService{
    lugares:any = [
        { nombre: "Floreria la Gardenia", active: true, cercania: 1, distancia: 1, plan:'pagado', id: 1 },
        { nombre: "Donas la pasadita", active: true, cercania: 1, distancia: 1.8, plan:'gratuito', id: 2 },
        { nombre: "Veterinaria Huellitas felices", active: true, cercania: 2, distancia: 5, plan:'gratuito', id: 3 },
        { nombre: "Sushi Sushiroll", active: false, cercania: 3, distancia: 10, plan:'gratuito', id: 4 },
        { nombre: "Hotel la García", active: true, cercania: 3, distancia: 35, plan:'pagado', id: 5 },
        { nombre: "Zapatería el Clavo", active: true, cercania: 3, distancia: 120, plan:'gratuito', id: 6 }
    ]

    constructor(private afDB:AngularFirestore) {}

    public getLugares() {
        return this.afDB.collection('lugares').valueChanges()
    }

    public buscarLugar(id) {
        return this.lugares.find( lugar => lugar.id == id) || null;
    }

    public guardarLugar(lugar) {
        this.afDB.collection('lugares').add(lugar)
	}
}