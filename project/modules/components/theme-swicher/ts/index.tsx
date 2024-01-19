import React from 'react';
import { IconButton } from 'pragmate-ui/icons';
import { widgets } from '@beyond-js/widgets/render';

export /*bundle*/ function ThemeSwitcher({ fetching }): JSX.Element {
    const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeStorage = localStorage.getItem('theme');
    const defaultTheme: string = theme ? 'dark' : 'light';
    const userTheme: string = themeStorage ?? defaultTheme;
    const [icon, setIcon] = React.useState<string>(userTheme === 'dark' ? 'sun' : 'moon');

    function handleChange(e): void {
        e.preventDefault();

        const container = document.querySelector('html');
        const theme = icon === 'sun' ? 'light' : 'dark';
        container.setAttribute('data-beyond-mode', theme);
        localStorage.setItem('theme', theme);
        widgets.attributes.add('data-beyond-mode', theme);

        setIcon(theme === 'dark' ? 'sun' : 'moon');
    }

    React.useEffect(() => {
        if (!themeStorage) return;
        const container = document.querySelector('html');
        container.setAttribute('data-beyond-mode', themeStorage);
    }, []);

    return (
        <div className='sidebar-item theme-switcher' onClick={handleChange}>
            <IconButton className='md' icon={icon} disabled={fetching} onClick={handleChange} />
        </div>
    );
}