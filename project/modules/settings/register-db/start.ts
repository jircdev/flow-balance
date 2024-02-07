import { DBManager } from '@beyond-js/reactive/database';
async function create() {
	try {
		const db = await DBManager.config('FlowBalance@3', {
			Contacts: 'id, email',
			Currencies: 'id, name',
			FinancialAccounts: 'id',
			Products: 'id, name',
			ProductsCategory: 'id, name',
			ExchangeRates: 'id',
			Reports: 'id',
			Sales: 'id, client',
			SalesDetails: 'id, name',
			Transactions: 'id',
			TransactionCategories: 'id, name',
			TransactionHistories: 'id',
			Users: 'id, name'
		});

		//db.user.bulkAdd(users);
	} catch (e) {
		console.trace('error', e);
	}
}

create();
