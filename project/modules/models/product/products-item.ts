import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Product extends Item<Product> {
        id: number;
        name: string;
        price: number;
        quantity: number;
        description: string;
}