import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Report extends Item<Report> {
        id: number;
        type: string;
        details: string;
        expensesIncurred: number;
}