import React from "react";
import { Empty } from 'pragmate-ui/empty';
import { ButtonAdd } from 'flow-balance/button-add';
import { NavProduct } from "./nav";

export function EmptyProducts({store}) {
    return (
        <>
            <NavProduct />	
            <main className="center-empty">
                <Empty text="Add your products" icon="box" />
                <ButtonAdd onClick={store.addProducts} icon='box' />
            </main>
        </>
    )
}