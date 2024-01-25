import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';


interface IExchangeRate {
	id: number;
	CurrencyOfDestination: string;
	ValueOfExchangeValue: number;
	source: string;
	destinacionCurrency: string;
}
export /* bundle */ class ExchangeRate extends Item<IExchangeRate> {
    protected properties: string[] = ['id', 'CurrencyOfDestination', 'ValueOfExchangeValue', 'source', 'destinacionCurrency',];

	constructor({id} = {id:undefined}) {
		super({storeName: 'ExchangeRates', db: 'FlowBalance', id});
	}
}