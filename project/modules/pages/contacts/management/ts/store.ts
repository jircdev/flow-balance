import { ReactiveModel } from '@beyond-js/reactive/model';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { Contact} from 'flow-balance/model/contacts';
export class StoreManager extends ReactiveModel<StoreManager> {
	#model: Contact;
	get model() {
		return this.#model;
	}
	constructor() {
		super();
		this.#model = new Contact();
	}
}
