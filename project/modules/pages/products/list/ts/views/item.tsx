import * as React from 'react';
import { IconButton } from 'pragmate-ui/icons';
import { routing } from '@beyond-js/kernel/routing';
import { keys } from './keys';


export function Item({ item }) {

	const entries = keys.map((key: string) => {
		return (
			<td key={key}>
				<span>{item[key] ?? 'Sin valor'}</span>
			</td>
		);
	});

	return (
		<tr>
			{entries}
			<td className="td-icon-button">
					<span>
						<IconButton title='edit' icon="pencil" />
					</span>
				</td>
		</tr>
	);
}
