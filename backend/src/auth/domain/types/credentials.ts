import {User} from '../entity/user';

export interface Credentials {
    email: User['email'];
    password: User['password'];
}
