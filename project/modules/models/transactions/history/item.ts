import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface ITransactionHistories {
    id: number;
    date: number;
    register: string;
    description: string;
    transactionLog: string;
}

export /* bundle */ class TransactionHistory extends Item<ITransactionHistories> {
    protected properties: string[] = ['id', 'date', 'register', 'description', 'transactionLog',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'TransactionHistories', db: 'FlowBalance', id });
	}
}