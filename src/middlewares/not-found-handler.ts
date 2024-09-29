import { NotFoundException } from '../exceptions/not-found-exceptions';

export const notFoundHandler = (req: any, res: any, next: any) => {
	next(new NotFoundException('Resource not found'));
};
