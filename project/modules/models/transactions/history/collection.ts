import { Collection } from "@beyond-js/reactive/entities";
import { TransactionHistory } from "./item";

export /*bundle*/ class TransactionsHistories extends Collection {
    constructor() {
		super({ storeName: 'TransactionHistories', db: 'FlowBalance', item: TransactionHistory });
	}
}
