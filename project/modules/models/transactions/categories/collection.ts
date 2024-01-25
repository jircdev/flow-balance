import { Collection } from "@beyond-js/reactive/entities";
import { TransactionCategory } from "./item";

export /*bundle*/ class TransactionsCategories extends Collection {
    constructor() {
		super({ storeName: 'TransactionsCategories', db: 'FlowBalance', item: TransactionCategory });
	}
}
