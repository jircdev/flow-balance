import React from "react";
import { Icon } from 'pragmate-ui/icons';

interface IProps {
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export function ProductElement(props : IProps) {

    const {name, price, description, quantity} = props;

    return (
        <div className="content-product">
            <div className="content-product__data">
                <div className="content-image">
                    <Icon icon='box' />
                </div>
                <div className="show-data">
                    <strong className="text--name">
                        {name}
                    </strong>
                    <span className="span-quantity">
                        <strong className="span-quantity__strong">
                        {`${quantity}`}
                        </strong> unids.
                    </span>
                    <p className="p-description">
                        {description}
                    </p>
                </div>
            </div>
            <div className="content-product__block-price">
                <span className="block-price__span">
                    {`${price}$`}
                </span>
            </div>
        </div>
    )
}