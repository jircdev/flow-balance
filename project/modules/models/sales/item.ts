import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface ISales {
    id: number;
    client: string;
    dateOfVent: number;
    totalAmount: number;
    productsSold: string;
};

export /* bundle */ class Sale extends Item<ISales> {
    protected properties: string[] = ['id', 'client', 'dateOfVent', 'totalAmount', 'productsSold',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'Sales', db: 'FlowBalance', id });
	}
}