import { BaseModel } from './BaseModel';

export class User extends BaseModel {
	public readonly name: string;
	public readonly email: string;
	public readonly role: 'user' | 'admin';

	constructor(name: string, email: string, role: 'user' | 'admin') {
		super();

		this.validate(name, email, role);

		this.name = name;
		this.email = email;
		this.role = role;
	}

	validate(name: string, email: string, role: 'user' | 'admin') {
		if (!name) throw new Error('User name is required');

		if (!email) throw new Error('User email is required');

		if (!role) throw new Error('User role is required');
	}
}
