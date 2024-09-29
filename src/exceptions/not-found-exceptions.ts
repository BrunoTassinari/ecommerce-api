import { BaseException } from './base-exception';

class NotFoundException extends BaseException {
	constructor(message: string) {
		super(message, 404);
	}
}

export { NotFoundException };
