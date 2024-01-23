import { ReactiveModel } from "@beyond-js/reactive/model";
import {Item} from '@beyond-js/reactive/entities';

export /* bundle */ class Contact extends Item<Contact> {
        id: number;
        name: string;
        infoContact: string;
}