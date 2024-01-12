import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class TransactionHistory extends ReactiveModel<TransactionHistory> {
        id: number;
        date: number;
        register: string;
        description: string;
        transactionLog: string;
}