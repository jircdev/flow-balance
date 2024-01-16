import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Sale extends Item<Sale> {
        id: number;
        client: string;
        dateOfVent: number;
        totalAmount: number;
        productsSold: string;
}