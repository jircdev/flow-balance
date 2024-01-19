import React from 'react';
import {Image} from 'pragmate-ui/image';
import {MenuList} from './list';

type props = {
	handleClick: any;
	show: boolean;
	children: any;
	isImage?: boolean;
	title?: string;
	className?: string;
	items?: any[];
};
export /*bundle*/ function PullDownMenu({
	handleClick,
	show,
	items,
	children,
	isImage,
	title,
	className,
}: props): JSX.Element {
	let cls: string = show ? 'pull-down-menu' : 'pull-down-menu pull-down-menu__hide';
	cls += ` ${className ?? ''}`;
	const isItems: boolean = !!items && Array.isArray(items);
	return (
		<>
			<div className={cls}>
				{(title || isImage) && (
					<header>
						{isImage && (
							<div className="image-menu">
								<Image src={`${globalThis.baseDir}assets/dummy.svg`} alt=" " />
							</div>
						)}
						{title && <span>{title}</span>}
					</header>
				)}
				{isItems && <MenuList items={items} />}
				{children}
			</div>
			{show && <div onClick={handleClick} className="background-black" />}
		</>
	);
}
