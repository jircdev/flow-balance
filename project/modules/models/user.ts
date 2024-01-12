import { ReactiveModel } from "@beyond-js/reactive/model";

export /* bundle */ class User extends ReactiveModel<User> {
        id: number;
        name: string;
        lastName: string;
        password: string;

}