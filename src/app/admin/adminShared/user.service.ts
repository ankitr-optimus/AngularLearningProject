import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
 } from '@angular/router';

 import * as firebase from "firebase";

 @Injectable() 
 export class userService implements CanActivate {
     userLoggedIn: boolean = false;
     constructor( private router: Router ) {         

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDGNgbbN-Hb1Y2CLdcvdEeJqD_Og1K4FhU",
            authDomain: "gigabytegame-4af0b.firebaseapp.com",
            databaseURL: "https://gigabytegame-4af0b.firebaseio.com",
            projectId: "gigabytegame-4af0b",
            storageBucket: "gigabytegame-4af0b.appspot.com",
            messagingSenderId: "800985152556"
        };
        firebase.initializeApp(config);

     }
     
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
         let url: string = state.url;
         return this.verifyLogin(url);
     }
     
     verifyLogin(url: string): boolean { 
         if(this.userLoggedIn) { return true;}
         
         this.router.navigate(['admin/login']);
         return false
     }
 }