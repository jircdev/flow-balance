import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IUser {
    id: number;
    name: string;
    lastName: string;
    password: string;
}

export /* bundle */ class User extends Item<IUser> {
    protected properties: string[] = ['id', 'name', 'lastName','password',];
    
    constructor({id} = {id: undefined}) {
        super({ storeName: 'Users', db: 'FlowBalance', id });
    }
}