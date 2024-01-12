import * as React from "react";
import { CreateContactContext } from "./context";
import { data } from "./data";
import { ContentContact } from "../components/contact";

export /*bundle*/
function View(): JSX.Element {
	const value = {};
	const output = data.map(contact => (
        <ContentContact
          key={contact.id}
          fullName={contact.name}
          image="https://unavatar.io/random"
          phone={contact.phone}
          email={contact.email}
        />
      ))
  return (
	<CreateContactContext.Provider value={value}>	
		<div className="page__container-contact">
		<section className="container__list--contact">
			{output}
		</section>
		</div>
	</CreateContactContext.Provider>
  );
}