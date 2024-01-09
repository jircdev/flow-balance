import React from 'react';

export function TotalCount() {

    const totalMoney = '17';
    return (
        <div className="content-total">
            <span className="content-total__span">Total : <strong>{totalMoney}$</strong></span>
        </div>
    )
}