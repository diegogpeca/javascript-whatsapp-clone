import {Firebase} from './../util/Firebase';
import {ClassEvent} from '../util/ClassEvent';

export class User extends ClassEvent{

    static gerRef(){

        return Firebase.db().collection('/users');
    }

    static findByEmail(email){

        return User.gerRef().doc(email);
    }
}