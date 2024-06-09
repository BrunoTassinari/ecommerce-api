import { v4 as uuidv4 } from 'uuid';

export class BaseModel {
	public readonly id: string;

	constructor() {
		this.id = uuidv4();
	}
}
