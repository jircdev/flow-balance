import React from 'react';
export /*bundle*/ function PageContainer({ children, className, fetching }) {
	let cls = `page-container ${className ? ` ${className}` : ''}`;
	if (fetching) cls += ' is-fetching';
	return <main className={cls}>{children}</main>;
}
