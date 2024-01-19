import * as React from 'react';

export /*bundle*/ function useUploader(ref, onLoad, mediaDevice) {
	const [uploader, setUploader] = React.useState(null);

	React.useEffect(() => {
		if (globalThis.phonegap || globalThis.ionic || globalThis.cordova) return;
		mediaDevice.newMediaFiles();
		const uploaderInput = mediaDevice.setInputFile(ref.current);
		setUploader(uploaderInput);
		const onload = () => onLoad(uploaderInput, mediaDevice);
		uploaderInput.on('loadend', onload);
		return () => uploaderInput.off('loadend', onload);
	}, []);

	return [mediaDevice, uploader];
}
