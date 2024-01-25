import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IProductsCategory {
    id: number;
    name: string;
    description: number;
}

export /* bundle */ class ProductCategory extends Item<IProductsCategory> {
    protected properties: string[] = ['id', 'name', 'description',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'ProductCategories', db: 'FlowBalance', id });
	}
}