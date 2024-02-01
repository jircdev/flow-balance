import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { ReactiveModel } from '@beyond-js/reactive/model';
import { Products, Product } from 'flow-balance/model/products';
import {routing} from '@beyond-js/kernel/routing';

export class StoreManager extends ReactiveModel<StoreManager> {

    #item: Product = new Product();
    #collection: Products = new Products();

    load = async () => {
		this.fetching = true;		
		try {
			const response = await this.#collection.load();
			if (!response.status) throw response.error;
		} catch (error) {
			console.error(error);
		} finally {
			this.ready = true;
			this.fetching = false;
		}
	};
    
    saveProducts = async (fields) => {
        try {
            this.fetching = true;
            this.#item.set(fields);
            this.#item.publish();
            this.#item.load();
            routing.pushState('/products/list');
            this.triggerEvent()
        } catch (error) {
            console.error(error);
        } finally {
            this.fetching = false;
        }

    }
}
