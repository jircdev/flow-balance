import { ReactiveModel } from '@beyond-js/reactive/model';
import { Item } from '@beyond-js/reactive/entities';

export interface IContact {
	id: string;
	phone: string;
}
export /* bundle */ class Contact extends Item<IContact> {
	properties = ['id', 'email', 'phone', 'description', 'name', 'infoContact'];

	constructor({ id } = { id: undefined }) {
		super({ storeName: 'Contacts', db: 'FlowBalance', id });
	}
}
