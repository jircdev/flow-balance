import { Collection } from "@beyond-js/reactive/entities";
import { Sale } from "./item";

export /*bundle*/ class Sales extends Collection {
    constructor() {
		super({ storeName: 'Sales', db: 'FlowBalance', item: Sale });
	}
}
