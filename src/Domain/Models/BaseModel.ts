import { v4 as uuidv4 } from 'uuid';

export class BaseModel {
	public readonly id: string;
	public readonly createdAt: Date = new Date();
	public readonly updatedAt: Date = new Date();

	constructor() {
		this.id = uuidv4();
	}
}
