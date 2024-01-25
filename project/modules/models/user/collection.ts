import { Collection } from "@beyond-js/reactive/entities";
import { User } from "./item";

export /*bundle*/ class Users extends Collection {
    constructor() {
		super({ storeName: 'Users', db: 'FlowBalance', item: User });
	}
}
