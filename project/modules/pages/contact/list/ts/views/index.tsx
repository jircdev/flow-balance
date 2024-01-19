import * as React from "react";
import { CreateContactContext } from "./context";
import { data } from "./data";
import { ContentContact } from "../components/contact";
import { ButtonAdd } from 'flow-balance/button-add';
import { routing } from '@beyond-js/kernel/routing';
import { NavList } from "./nav";

export /*bundle*/
function View(): JSX.Element {

  const redirection = () => {
    routing.pushState('/contact/management');
  }

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
    <NavList />
		<div className="page__container-contact">
      <section className="container__list--contact">
        {output}
      </section>
      <ButtonAdd onClick={redirection} />
		</div>
	</CreateContactContext.Provider>
  );
}