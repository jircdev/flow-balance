import type { IWidgetStore } from '@beyond-js/widgets/controller';
import {routing} from '@beyond-js/kernel/routing';
import { ReactiveModel } from "@beyond-js/reactive/model";

export class StoreManager extends ReactiveModel<StoreManager> {
	constructor() {
		super();
	}

	goToContacts = () => {
		try {
			this.fetching = true;
			routing.pushState('/contact/list');
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
		}
	}
	goToAccounts = () => {
		try {
			this.fetching = true;
			routing.pushState('/accounts/view');
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
		}
	}
}
