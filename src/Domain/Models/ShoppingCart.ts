import { BaseModel } from './BaseModel';
import type { ShoppingcCartItem } from './ShoppingCartIem';
import type { User } from './User';

export class ShoppingcCart extends BaseModel {
	public readonly user: User;
	public readonly items: Array<ShoppingcCartItem>;
	public readonly total: number;

	constructor(user: User, items: Array<ShoppingcCartItem>) {
		super();

		this.validate(user, items);

		this.user = user;
		this.items = items;
		this.total = this.calculateTotal();
	}

	validate(user: User, items: Array<ShoppingcCartItem>) {
		if (!user) throw new Error('User is required');

		if (!items) throw new Error('Items are required');
	}

	calculateTotal() {
		return this.items.reduce((total, item) => total + item.total, 0);
	}
}
