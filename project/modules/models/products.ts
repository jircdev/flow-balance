import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class Products extends ReactiveModel<Products> {
        id: number;
        name: string;
        price: number;
        quantity: number;
        description: string;
}