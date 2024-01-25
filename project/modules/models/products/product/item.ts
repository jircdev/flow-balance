import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IProducts {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
}

export /* bundle */ class Product extends Item<IProducts> {
    protected properties: string[] = ['id', 'name', 'price', 'quantity', 'description',];

    constructor({ id } = { id: undefined}) {
        super({storeName: 'Products', db: 'FlowBalance', id })
    }
}