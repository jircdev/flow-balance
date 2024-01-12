import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class Currency extends ReactiveModel<Currency> {
        id: number;
        name: string;
        code: string;
        symbol: string;
}