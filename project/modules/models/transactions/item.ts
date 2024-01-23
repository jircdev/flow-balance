import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Transaction extends Item<Transaction> {
        id: number;
        souce: string;
        date: number;
        typeTransaction: string;
}