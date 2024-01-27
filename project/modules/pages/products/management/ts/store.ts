import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { ReactiveModel } from '@beyond-js/reactive/model';
import { Products } from 'flow-balance/model/products';

export class StoreManager extends ReactiveModel<StoreManager> {

    list = [];

    saveProducts = (fields) => {
        console.log(fields);
        this.list.push(fields);
    }
}
