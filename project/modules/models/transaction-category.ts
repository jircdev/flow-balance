import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class transactionCategory extends ReactiveModel<transactionCategory> {
        id: number;
        name: string;
        description: string;
        type: string;
}