import { ReactiveModel } from '@beyond-js/reactive/model';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Contact, Contacts} from 'flow-balance/model/contacts';
import { routing } from '@beyond-js/kernel/routing';
export class StoreManager extends ReactiveModel<StoreManager> {
	
	#collection: Contacts = new Contacts();
	get collection() {
		return this.#collection;
	}

	#item: Contact = new Contact();
	get item() {
		return this.#item;
	}

	load = async () =>  {
		this.fetchin = true;
		try {
			const response = await this.#collection.load();
			if(!response.status) return response.error;
		} catch (error) {
			console.error(error);
		} finally {
			this.ready = true;
			this.fetching = false;
		}
	}

	saveContacts = async (fields) => {
		try {
			this.fetching = true;
			this.#item.set(fields);	
			this.#item.publish();
            this.#item.load();
            routing.pushState('/contact/list');
			this.triggerEvent();
		} catch (error) {
			console.error(error)
		} finally {
			this.fetching = false;
		}
	}
}
