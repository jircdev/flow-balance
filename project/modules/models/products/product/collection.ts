import { Collection } from "@beyond-js/reactive/entities";
import { Product } from "./item";

export /*bundle*/ class Products extends Collection {
    constructor() {
		super({ storeName: 'Products', db: 'FlowBalance', item: Product });
	}
}
