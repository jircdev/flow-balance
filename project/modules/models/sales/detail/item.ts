import { Item } from "@beyond-js/reactive/entities";

export /*bundle*/ class SaleDetail extends Item<SaleDetail> {
    id: number;
    name: string;
    quantityProduct: number;
    amount: string | number;
    salesNumber: number;
    dateTime: string | number
}
