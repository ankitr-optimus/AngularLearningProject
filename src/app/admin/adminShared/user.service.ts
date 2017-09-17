import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
 } from '@angular/router';

 import * as firebase from "firebase";

 @Injectable() 
 export class UserService implements CanActivate {
     userLoggedIn: boolean = false;
     loggedInUser: string;
     authUser: any;
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

     register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                alert('${error.message} Please Try Again!');
        });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        
        if (this.authUser) {
            alert('Welcom ${this.authUser.email}');
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function(error) {
                alert('${error.message} Unable to login. try again!');
        });	
    }

    logout() {
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function() {
            alert('Logged Out!');
        }, function(error) {
            alert('${error.message} unable to logout. Try again!');
        });
    }
 }