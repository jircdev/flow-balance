import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IFinancialAccounts {
    id: number;
    income: string;
    expenses: string;
    password: string;
    balance: number;
    accountNumber: number;
}

export /* bundle */ class FinancialAccount extends Item<IFinancialAccounts> {
    protected properties: string[] = ['id', 'income', 'expenses', 'password', 'balance', 'accountNumber',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'FinancialAccounts', db: 'FlowBalance', id });
	}
}

