import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class ExchangeRate extends ReactiveModel<ExchangeRate> {
        id: number;
        CurrencyOfDestination: string;
        ValueOfExchangeValue: number;
        source: string;
        destinacionCurrency: string;
}