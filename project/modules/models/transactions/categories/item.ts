import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface ITransactionCategories {
    id: number;
    name: string;
    description: string;
    type: string;
}

export /* bundle */ class TransactionCategory extends Item<ITransactionCategories> {
    protected properties: string[] = ['id', 'name', 'description', 'type',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'TransactionCategories', db: 'FlowBalance', id });
	}
}