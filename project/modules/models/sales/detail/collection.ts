import { Collection } from "@beyond-js/reactive/entities";
import { SaleDetail } from "./item";

export /*bundle*/ class SalesDetails extends Collection {
    constructor() {
		super({ storeName: 'SaleDetails', db: 'FlowBalance', item: SaleDetail });
	}
}
