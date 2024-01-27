import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';


interface IExchangeRates {
	id: number;
	CurrencyOfDestination: string;
	ValueOfExchangeValue: number;
	source: string;
	destinacionCurrency: string;
}
export /* bundle */ class ExchangeRate extends Item<IExchangeRates> {
    protected properties: string[] = ['id', 'CurrencyOfDestination', 'ValueOfExchangeValue', 'source', 'destinacionCurrency',];

	constructor({id} = {id:undefined}) {
		super({storeName: 'ExchangeRates', db: 'FlowBalance', id});
	}
}