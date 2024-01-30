import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { ReactiveModel } from '@beyond-js/reactive/model';
import { routing } from '@beyond-js/kernel/routing';
import { Products, Product } from 'flow-balance/model/products';

export class StoreManager extends ReactiveModel<StoreManager> {

    #collection : Products;
    get collection() {
        return this.#collection;
    }

    constructor() {
        super();
        this.#collection = new Products();  
    }

    load = async () => {
        try {
            this.fetching = true;
            const response = await this.#collection.load();
            if(!response.status) throw response.error;
        } catch (error) {
            console.error(error);
        } finally {
            this.fetching = false;
        }
    } 
    
    addProducts = () => {
		routing.pushState('/products/management');
        this.triggerEvent();
    }
}
