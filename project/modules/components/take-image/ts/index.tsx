import React, {useState, MouseEvent, ForwardRefExoticComponent, RefAttributes, forwardRef, Ref} from 'react';
import {Image} from 'pragmate-ui/image';
import {IconButton} from 'pragmate-ui/icons';
import {PullDownMenu} from 'flow-balance/pull-down-menu';
/* import { useUploader } from 'flow-balance/hooks' */;
import {TakeImageContext} from './context';
import {CameraButton} from './camera-button';

type props = {
	model?: any;
	onTake?: any;
	previousImg?: string;
	fetching?: boolean;
	mediaDevice: any;
};

export /*bundle*/ const TakeImage: ForwardRefExoticComponent<props & RefAttributes<unknown>> = forwardRef(
	(props: props, ref: Ref<HTMLInputElement>): JSX.Element => {
		const {onTake, previousImg, model, fetching, mediaDevice} = props;
		const [image, setImage] = useState<string>(previousImg ?? '');
		const [isOpen, setIsOpen] = useState<boolean>(false);
		const toggleMenu = (): void => setIsOpen(!isOpen);

		React.useEffect(() => {
			setImage(previousImg ?? '');
		}, [previousImg]);

		const onload = async (uploader, media) => {
			setImage(uploader.files.entries[0].src);
			if (onTake) await onTake(media);
			setIsOpen(false);
		};
		/* if (model) {
			useBinder(
				[model],
				() => {
					setImage('');
					setIsOpen(false);
					mediaDevice?.cleanFiles();
				},
				'hide'
			);
		} */
		/* useUploader(ref, onload, mediaDevice); */

		const openGallery = async (event: MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			event.stopPropagation();
			if (!globalThis.phonegap && !globalThis.cordova) return;
			const src = await mediaDevice.openGallery();
			setImage(src);
			if (onTake) await onTake(mediaDevice);
			setIsOpen(false);
		};

		const cls = fetching ? 'image-result image-result-fetching' : 'image-result';

		const contextValue = {
			setImage,
			image,
			mediaDevice,
			onTake,
			setIsOpen,
		};
		return (
			<TakeImageContext.Provider value={contextValue}>
				<div>
					<Image src={image} alt=" " className={cls}>
						<IconButton onClick={toggleMenu} icon="camera" disabled={false} />
					</Image>

					<PullDownMenu
						title="¿Qué deseas realizar?"
						show={isOpen}
						handleClick={toggleMenu}
						className="take-image"
					>
						<div className="menu-picture">
							<div className="option-picture">
								<IconButton ref={ref} onClick={openGallery} icon="gallery" />
								<span>Subir de galería</span>
							</div>
							<CameraButton />
						</div>
					</PullDownMenu>
				</div>
			</TakeImageContext.Provider>
		);
	}
);
