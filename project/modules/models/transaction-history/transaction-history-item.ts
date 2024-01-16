import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class TransactionHistory extends Item<TransactionHistory> {
        id: number;
        date: number;
        register: string;
        description: string;
        transactionLog: string;
}