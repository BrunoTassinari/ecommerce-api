import { BaseModel } from './BaseModel';
import type { Product } from './Product';

export class SaleItem extends BaseModel {
	public readonly product: Product;
	public readonly quantity: number;
	public readonly total: number;

	constructor(product: Product, quantity: number) {
		super();

		this.validate(product, quantity);

		this.product = product;
		this.quantity = quantity;
		this.total = this.calculateTotal();
	}

	validate(product: Product, quantity: number) {
		if (!product) throw new Error('Product is required');

		if (!quantity) throw new Error('Quantity is required');
	}

	calculateTotal() {
		return this.product.price * this.quantity;
	}
}
