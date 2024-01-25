import { Collection } from "@beyond-js/reactive/entities";
import { ExchangeRate } from "./item";

export /*bundle*/ class ExchangeRates extends Collection {
    constructor() {
		super({ storeName: 'ExchangeRates', db: 'FlowBalance', item: ExchangeRate });
	}
}
