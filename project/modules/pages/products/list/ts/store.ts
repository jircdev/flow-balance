import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { ReactiveModel } from '@beyond-js/reactive/model';
import { routing } from '@beyond-js/kernel/routing';
import { Products } from 'flow-balance/model/products';

export class StoreManager extends ReactiveModel<StoreManager> {

    #collection : Products = [];
    get collection() {
        return this.#collection;
    }
    
    addProducts = () => {
		routing.pushState('/products/management');
        this.triggerEvent();
    }
}
