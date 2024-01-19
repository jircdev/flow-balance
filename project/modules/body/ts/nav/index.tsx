import React from 'react';

export /* bundle */ function Navigation(props) {
	const { children } = props;

	const [scrollPosition, setScrollPosition] = React.useState(0);

	const handleScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition > 20;
	const cls = `container__navbar ${isScrolled ? 'container__navbar-scrolled' : ''}`;
	return <nav className={cls}>{children}</nav>;
}
