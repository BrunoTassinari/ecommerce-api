import { NotFoundException } from '../exceptions/not-found-exceptions';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const notFoundHandler = (req: any, res: any, next: any) => {
	next(new NotFoundException('Resource not found'));
};
