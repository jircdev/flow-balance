import { Collection } from "@beyond-js/reactive/entities";
import { FinancialAccount } from "./item";

export /*bundle*/ class FinancialAccounts extends Collection {
    constructor() {
		super({ storeName: 'FinancialAccounts', db: 'FlowBalance', item: FinancialAccount });
	}
}
