import { element, c } from './c.mjs';

export const edit = value => {
	const obj = new element();
	obj.b = value;
	c.b = value;
	console.log('in c', obj.b, c.b);
};
