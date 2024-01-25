import { DBManager } from '@beyond-js/reactive/database';
async function create() {
	try {
		const db = await DBManager.config('FlowBalance@3', {
			Contacts: '&id, name',
		});

		//db.user.bulkAdd(users);
	} catch (e) {
		console.trace('error', e);
	}
}

create();
