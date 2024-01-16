import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class ExchangeRate extends Item<ExchangeRate> {
        id: number;
        CurrencyOfDestination: string;
        ValueOfExchangeValue: number;
        source: string;
        destinacionCurrency: string;
}