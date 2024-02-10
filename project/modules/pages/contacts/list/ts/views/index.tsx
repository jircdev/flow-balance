import * as React from "react";
import { CreateContactContext } from "./context";
import { ContentContact } from "../components/contact";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { EmptyContacts } from "./empty-contacts";
import { LoadingPage } from 'flow-balance/loading-page';

export /*bundle*/
function View({store}): JSX.Element {

  const [storeValue, setStoreValue] = React.useState({});

	useBinder([store], () => setStoreValue({}));

	const value = {store};
	const output = store.collection.items.map((item) => (
        <ContentContact
          key={item.name}
          fullName={item.name}
          image="https://unavatar.io/random"
          phone={item.phone}
          email={item.email}
        />
      ));

  if (store.fetching) return <LoadingPage />;
	if(store.collection.items.length === 0) return <EmptyContacts store={store}/>;

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