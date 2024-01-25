import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface iCurrency {
    id: number;
    name: string;
    code: string;
    symbol: string;
}

export /* bundle */ class Currency extends Item<Currency> {
    protected properties : string[] = ['id', 'name', 'code', 'symbol',];

    constructor({id} = {id:undefined}) {
        super({storeName: 'Currencies', db: 'FlowBalance', id});
    }
}