import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Products extends Item<Products> {
        id: number;
        name: string;
        price: number;
        quantity: number;
        description: string;
}