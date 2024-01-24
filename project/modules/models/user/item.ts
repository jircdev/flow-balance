import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class User extends Item<User> {
        id: number;
        name: string;
        lastName: string;
        password: string;

}