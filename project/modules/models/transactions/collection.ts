import { Collection } from "@beyond-js/reactive/entities";
import { Transaction } from "./item";

export /*bundle*/ class Transactions extends Collection {
    constructor() {
		super({ storeName: 'Transactions', db: 'FlowBalance', item: Transaction });
	}
}
