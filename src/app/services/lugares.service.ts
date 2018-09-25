import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment'
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from 'rxjs/operators'

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

    constructor(private afDB:AngularFirestore, private http:Http, private afAuth: AngularFireAuth) {}

    public getLugares() {
        return this.afDB.collection('lugares').snapshotChanges()
        /*const headers = new Headers({ "Content-Type": "application/json" })
        return this.http.get(`${environment.API_ENDPOINT}/.json`).pipe(map(response=>response.json().lugares))*/
    }

    public getLugar(id) {
        return this.afDB.collection('lugares').doc(id).snapshotChanges()
        /*return this.http.get(environment.API_ENDPOINT + '/.json').
        pipe(map(resultado => {
            const data = resultado.json().lugares;
            return data;
        }));*/
    }

    public buscarLugar(id) {
        return this.lugares.find( lugar => lugar.id == id) || null;
    }

    public guardarLugar(lugar) {
        this.afDB.collection('lugares').add(lugar)
        /*console.log(this.afAuth.auth.currentUser)
        const headers = new Headers({ "Content-Type": "application/json" })
        return this.http.post(`${environment.API_ENDPOINT}/lugares.json`, lugar, { headers }).subscribe()*/
    }

    public editarLugar(id, lugar) {
        this.afDB.collection('lugares').doc(id).set(lugar)
    }
    
    public obtenerGeoData(direccion) {
        return this.http.get(`https://maps.google.com/maps/api/geocode/json?address=${direccion}&auth=AIzaSyB2Ks7mT6okXS4NKBhIpgJihs1bEXFQ4CU`)
    }
}