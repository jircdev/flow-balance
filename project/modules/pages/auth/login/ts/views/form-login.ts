export const login = {
	name: 'login',
	fields: [
		{
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			required: true,
			label: 'Username',
			variant: 'floating',
		},
		{
			name: 'password',
			type: 'password',
			placeholder: 'Enter your password',
			required: true,
			label: 'Password',
			variant: 'floating',
		},
	],
};