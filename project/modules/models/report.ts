import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class Report extends ReactiveModel<Report> {
        id: number;
        type: string;
        details: string;
        expensesIncurred: number;
}