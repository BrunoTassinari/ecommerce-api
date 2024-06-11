import { BaseModel } from './BaseModel';
import { OrderStatus } from './OrderStatus';
import type { SaleItem } from './SaleItem';
import type { User } from './User';

export class Order extends BaseModel {
	public user: User;
	public items: Array<SaleItem>;
	public status: OrderStatus;
	public total: number;

	constructor(user: User, items: Array<SaleItem>) {
		super();

		this.validate(user, items);

		this.user = user;
		this.items = items;
		this.status = OrderStatus.PENDING;
		this.total = this.calculateTotal();
	}

	validate(user: User, items: Array<SaleItem>) {
		if (!user) throw new Error('User is required');

		if (!items) throw new Error('Items are required');
	}

	calculateTotal() {
		return this.items.reduce((total, item) => total + item.total, 0);
	}
}
