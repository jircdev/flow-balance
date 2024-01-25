import { Collection } from "@beyond-js/reactive/entities";
import { Currency } from "./item"; 

export /*bundle*/ class Currencies extends Collection {
    constructor() {
		super({ storeName: 'Currencies', db: 'FlowBalance', item: Currency });
	}
}
