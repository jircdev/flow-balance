import { ReactiveModel } from '@beyond-js/reactive/model';
import { Item } from '@beyond-js/reactive/entities';

export interface IContact {
	id: string;
	name: string;
	phone: string;
	email: string;
	description: string;
	information: string;

}
export /* bundle */ class Contact extends Item<IContact> {
	protected properties : string[] = ['id', 'email', 'phone', 'description', 'name', 'information'];

	constructor({ id } = { id: undefined }) {
		super({ storeName: 'Contacts', db: 'FlowBalance', id });
	}
}
