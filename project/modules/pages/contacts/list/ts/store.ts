import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Contacts } from 'flow-balance/model/contacts';
import { ReactiveModel } from '@beyond-js/reactive/model';
import { routing } from '@beyond-js/kernel/routing';

export class StoreManager extends ReactiveModel<Contacts> {

    #collection : Contacts;
    get collection() {
        return this.#collection;
    }

    constructor() {
        super();
        this.#collection = new Contacts();  
    }

    #params: any = {
		limit: 3,
		start: 0,
		des: 'DES',
		order: 'timeUpdated',
		additionalOperand: '7',
	};

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

    
    search = async (value: string, collection) => {
        
        this.fetching = true;
        try {
            const filterItems = collection.filter((item: {name : string}) => {
                return item.name.includes(value);
            }) 
            this.#params = { ...this.#params, name: filterItems, start: 0 };
            console.log(filterItems);
            const response = await this.#collection.load(this.#params);
			if (!response.status) throw response.error;
        } catch (error) {
            console.error(error);
        } finally {
            this.fetching = false;
        }
    }
    
    redirectManagement = () => {
		routing.pushState('/contact/management');
        this.triggerEvent();
    }

}
