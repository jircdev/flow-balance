import { element, c } from './c.mjs';
import { edit } from './b.mjs';
const obj = new element();
console.log(obj.b, c.b);
edit(50);
console.log(obj.b, c.b);
