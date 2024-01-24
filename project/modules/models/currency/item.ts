import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Currency extends Item<Currency> {
        id: number;
        name: string;
        code: string;
        symbol: string;
}