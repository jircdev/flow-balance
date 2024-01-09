import * as React from "react";
import { CreateContactContext } from "./context";
import { Table } from "./table";
export /*bundle*/
function View(): JSX.Element {
	const value = {};
  return (
	<CreateContactContext.Provider value={value}>	
		<div className="page__container-contact">
			{/* <h2 className="contact-h2">List of Contacts</h2> */}
		<section className="container__table">
			<Table />
		</section>
		</div>
	</CreateContactContext.Provider>
  );
}