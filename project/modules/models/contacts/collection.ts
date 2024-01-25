import { Collection } from '@beyond-js/reactive/entities';
import { Contact } from './item';

export /*bundle*/ class Contacts extends Collection {
	constructor() {
		super({ storeName: 'Contacts', db: 'FlowBalance', item: Contact });
	}
}
