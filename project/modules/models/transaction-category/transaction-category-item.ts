import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class transactionCategory extends Item<transactionCategory> {
        id: number;
        name: string;
        description: string;
        type: string;
}