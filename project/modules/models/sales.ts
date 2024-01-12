import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class Sales extends ReactiveModel<Sales> {
        id: number;
        client: string;
        dateOfVent: number;
        totalAmount: number;
        productsSold: string;
}