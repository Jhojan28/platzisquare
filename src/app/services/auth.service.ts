import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable()

export class AuthService {
    constructor(private angularFireAuth: AngularFireAuth, private router:Router){
        this.isLoged()
    }

    public login = async (email, password) => {
        let response
        try {
            response = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            alert("Usuario Loggeado correctamente")
            console.log("Response--->", response)
            this.router.navigate(['lugares'])
        } catch (error) {
            alert('Un error ha ocurrido')
            console.log("Error--->", error)
        }
    }
    public registro = async (email, password) => {
        let response
        try {
            response = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            alert("Usuario creado correctamente")
            console.log("Response--->", response)
            this.router.navigate(['login'])
        } catch (error) {
            alert('Un error ha ocurrido')
            console.log("Error--->", error)
        }
    }

    public isLoged() {
        return this.angularFireAuth.authState
    }

    public logout() {
        this.angularFireAuth.auth.signOut()
        alert("Sesión cerrada")
        this.router.navigate(['lugares'])
    }

    public getUser() {
        return this.angularFireAuth.auth
    }
}