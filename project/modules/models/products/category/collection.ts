import { Collection } from "@beyond-js/reactive/entities";
import { ProductCategory } from "./item"; 

export /*bundle*/ class ProductsCategories extends Collection {
    constructor() {
		super({ storeName: 'ProductCategories', db: 'FlowBalance', item: ProductCategory });
	}
}
