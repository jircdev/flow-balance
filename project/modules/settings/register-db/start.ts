import { DBManager } from '@beyond-js/reactive/database';
async function create() {
	try {
		const db = await DBManager.config('FlowBalance@3', {
			Contacts: 'id, email, phone, description, name, information',
			Currencies: 'id, name, code, symbol,',
			FinancialAccounts: 'id, income, expenses, password, balance, accountNumber',
			Products: 'id, name, price, quantity, description',
			ProductsCategory: 'id, name, description',
			ExchangeRates: 'id, CurrencyOfDestination, ValueOfExchangeValue, source, destinacionCurrency',
			Reports: 'id, type, details, expensesIncurred',
			Sales: 'id, client, dateOfVent, totalAmount, productsSold',
			SalesDetails: 'id, name, quantityProduct, amount, salesNumber, dateTime',
			Transactions: 'id, source, date, typeTransaction',
			TransactionCategories: 'id, name, description, type',
			TransactionHistories: 'id, date, register, description, transactionLog',
			Users: 'id, name, lastName, password, description,'
		});

		//db.user.bulkAdd(users);
	} catch (e) {
		console.trace('error', e);
	}
}

create();
