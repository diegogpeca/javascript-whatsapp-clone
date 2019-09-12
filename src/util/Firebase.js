const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
require('firebase/database');

export class Firebase {

    constructor(){

        this._config = {
            apiKey: "AIzaSyAs5svrYdA2jAm-aL53XsQojtw-7YiYqfw",
            authDomain: "watsapp-clone-8369b.firebaseapp.com",
            databaseURL: "https://watsapp-clone-8369b.firebaseio.com",
            projectId: "watsapp-clone-8369b",
            storageBucket: "",
            messagingSenderId: "309019150875",
            appId: "1:309019150875:web:e06fee7489b5a3c8ce06be"
        };

        this.init();
    }

    init(){

        if(!window._initializedFirebase){
            firebase.initializeApp(this._config);
            //firebase.firestore().settings({timestampsInSnapshots: true})
            window._initializedFirebase = true;
        }        
    }

    static db(){
        
        return firebase.firestore();
    }

    static hd (){

        return firebase.storage();
    }

    initAuth(){
        return new Promise((s, f)=>{
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            firebase.auth().signInWithPopup(provider).then(result=>{
                let token = result.credential.accessToken;
                let user = result.user;
                s({
                    user, 
                    token
                });
            }).catch(err => {
                f(err);
            });
        });
    }
}