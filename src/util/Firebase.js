const firebase = require('firebase');
require('firebase/firestore');

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

        if(!this._initialized){
            firebase.initializeApp(this._config);
            //firebase.firestore().settings({timestampsInSnapshots: true})
            this._initialized = true;
        }        
    }

    static db(){
        
        return firebase.firestore();
    }

    static hd (){

        return firebase.storage();
    }
}