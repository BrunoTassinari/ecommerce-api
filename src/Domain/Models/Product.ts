import { BaseModel } from './BaseModel';

export class Product extends BaseModel {
	public readonly name: string;
	public readonly sku: string;
	public readonly price: number;
	public readonly description: string;
	public readonly image_url: string;
	public readonly is_blocked: boolean;

	constructor(
		name: string,
		sku: string,
		price: number,
		description: string,
		image_url: string,
		is_blocked: boolean,
	) {
		super();

		this.validate(name, sku, price, description, image_url, is_blocked);

		this.name = name;
		this.sku = sku;
		this.price = price;
		this.description = description;
		this.image_url = image_url;
		this.is_blocked = is_blocked;
	}

	validate(
		name: string,
		sku: string,
		price: number,
		description: string,
		image_url: string,
		is_blocked: boolean,
	) {
		if (!name) throw new Error('Product name is required');

		if (!sku) throw new Error('Product SKU is required');

		if (!price) throw new Error('Product price is required');

		if (!description) throw new Error('Product description is required');

		if (!image_url) throw new Error('Product image URL is required');

		if (is_blocked === undefined)
			throw new Error('Product block status is required');
	}
}
