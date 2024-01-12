import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class FinancialAccount extends ReactiveModel<FinancialAccount> {
        id: number;
        income: string;
        expenses: string;
        password: string;
        balance: number;
        accountNumber: number;
}