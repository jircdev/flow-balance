import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IUsers {
    id: number;
    name: string;
    lastName: string;
    password: string;
}

export /* bundle */ class User extends Item<IUsers> {
    protected properties: string[] = ['id', 'name', 'lastName','password',];
    
    constructor({id} = {id: undefined}) {
        super({ storeName: 'Users', db: 'FlowBalance', id });
    }
}