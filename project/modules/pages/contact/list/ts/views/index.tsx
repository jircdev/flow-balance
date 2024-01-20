import * as React from "react";
import { CreateContactContext } from "./context";
import { data } from "./data";
import { ContentContact } from "../components/contact";
import { ButtonAdd } from 'flow-balance/button-add';
import { routing } from '@beyond-js/kernel/routing';
import { NavList } from "./nav";
import { Empty } from 'pragmate-ui/empty';

export /*bundle*/
function View(): JSX.Element {

  const redirection = () => {
    routing.pushState('/contact/management');
  }

	const value = {};
  const isEmpty = data.length === 0 ? <Empty text="No Data" icon="info" /> : null;  
	const output = data.map(contact => (
        <ContentContact
          key={contact.id}
          fullName={contact.name}
          image="https://unavatar.io/random"
          phone={contact.phone}
          email={contact.email}
        />
      ))

    console.log(!data.length);
  return (
	<CreateContactContext.Provider value={value}>	
    <NavList />
		<div className="page__container-contact">
    {isEmpty}
      <section className="container__list--contact">
        {output}
      </section>
      <ButtonAdd onClick={redirection} />
		</div>
	</CreateContactContext.Provider>
  );
}