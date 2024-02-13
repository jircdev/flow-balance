import React from "react";
import { Empty } from 'pragmate-ui/empty';
import { ButtonAdd } from 'flow-balance/button-add';

export function EmptyProducts({store}) {
    return (
        <>
            <main className="center-empty">
                <Empty text="Add your products" icon="box" />
                <ButtonAdd onClick={store.addProducts} icon='box' />
            </main>
        </>
    )
}