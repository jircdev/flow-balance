import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class FinancialAccount extends Item<FinancialAccount> {
        id: number;
        income: string;
        expenses: string;
        password: string;
        balance: number;
        accountNumber: number;
}