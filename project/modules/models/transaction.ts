import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class Transaction extends ReactiveModel<Transaction> {
        id: number;
        souce: string;
        date: number;
        typeTransaction: string;
}