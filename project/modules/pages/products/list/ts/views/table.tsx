import React from 'react';
import { JView } from '@bgroup/jview/jview';
import { data } from './data';
import { keys } from './keys';
import { Item } from './item';
import { routing } from '@beyond-js/kernel/routing';

const direction = () => {
    routing.pushState('/contact/management');
}

export function Table() {

    const value = {
        dataHead: [
          { label: "Name", id: "1" },
          { label: "Descripcion", id: "2" },
          { label: "Price", id: "3" },
          { label: "Quantity", id: "4" },
        ],
        entries: data,
        rows: 5,
        item: Item,
        total: data.length,
        pagerNext: true,
        keys: keys,
        currentPage: 1,
        title: 'List of Products',
        actions: {
            create: {
                label: "Add Products",
                onClick: () => { direction() },
            },
        },
        isSearch: true,
      };

    return (
        <div className="table">
            <JView {...value} />
        </div>
    )
}