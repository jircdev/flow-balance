import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

interface IReports {
    id: number;
    type: string;
    details: string;
    expensesIncurred: number;
}

export /* bundle */ class Report extends Item<IReports> {
    protected properties: string[] = [ 'id', 'type', 'details', 'expensesIncurred',];

    constructor({ id } = { id: undefined }) {
		super({ storeName: 'Reports', db: 'FlowBalance', id });
	}
}