import React, { ChangeEvent } from "react";

export type getInput = {
	name: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLElement>) => void;
	label?: string;
	id?: string;
	disabled?: boolean;
};
export type getCheckbox = {
	name: string;
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
};
export type getRadio = {
	name: string;
	label: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	checked: boolean;
	disabled?: boolean;
};
export type getSelect = {
	name: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
};
