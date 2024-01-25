import { Item } from "@beyond-js/reactive/entities";

interface ISalesDetails {
    id: number;
    name: string;
    quantityProduct: number;
    amount: string | number;
    salesNumber: number;
    dateTime: string | number
}

export /*bundle*/ class SaleDetail extends Item<ISalesDetails> {
    protected properties: string[] = [ 'id', 'name', 'quantityProduct', 'amount', 'salesNumber', 'dateTime',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'SalesDetails', db: 'FlowBalance', id });
	}
}
