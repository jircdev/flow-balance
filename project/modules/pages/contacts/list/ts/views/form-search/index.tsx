import React from 'react';
import { Form, Input } from 'pragmate-ui/form';
import { useContactContext } from "../context";

export function FormFilter() {

    const [values, setValues] = React.useState('');
    const { store } = useContactContext();

    const handleChange = (event) => {
        const {value} = event.target;
        setValues(value);
    }

    const handleSearch = () => {
        store.search(values, store.collection.items);
    }

    return (
        <>
            <Form action="" onSubmit={handleSearch} className="container-search">
                <Input type="text" placeholder="search contact..." onChange={handleChange} value={values} />
            </Form>
        </>
    )
}