import { Collection } from "@beyond-js/reactive/entities";
import { Report } from "./item"; 

export /*bundle*/ class Reports extends Collection {
    constructor() {
		super({ storeName: 'Reports', db: 'FlowBalance', item: Report });
	}
}
