import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface ITransactions {
    id: number;
    source: string;
    date: number;
    typeTransaction: string;
}

export /* bundle */ class Transaction extends Item<ITransactions> {

    protected properties: string[] = ['id', 'source', 'date', 'typeTransaction',];
        
    constructor({ id } = { id: undefined }) {
		super({ storeName: 'Transactions', db: 'FlowBalance', id });
	}
}