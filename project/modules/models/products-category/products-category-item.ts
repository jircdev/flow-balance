import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class ProductCategory extends Item<ProductCategory> {
        id: number;
        name: string;
        description: number;
}