import * as React from "react";
interface IImageContext {
	image?: any;
	setImage?: Function;
	mediaDevice?: any;
	onTake?: any;
	setIsOpen? : any
}
const defaultValue: IImageContext = {};
export const TakeImageContext = React.createContext(defaultValue);
export const useTakeImageContext = () => React.useContext(TakeImageContext);
