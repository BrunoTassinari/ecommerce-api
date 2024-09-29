import { BaseException } from './base-exception';

class UnauthorizedException extends BaseException {
	constructor(message: string) {
		super(message, 401);
	}
}

export { UnauthorizedException };
