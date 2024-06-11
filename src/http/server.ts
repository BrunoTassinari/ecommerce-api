import { Product } from '../Domain/Models/Product';

const main = async () => {
	const prod = new Product(
		'Product Name',
		'Product SKU',
		10.0,
		'Product Description',
		'Product Image URL',
		false,
	);

	console.log(prod);
};

main();
