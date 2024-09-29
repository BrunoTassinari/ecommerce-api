import express from 'express';
import { UnauthorizedException } from '../exceptions/unauthorized-exception';
import { notFoundHandler } from '../middlewares/not-found-handler';
import { errorHandler } from '../middlewares/error-handler';

const app = express();

app.use(express.json());

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
app.get('/', (req: any, res: any, next: any) => {
	try {
		throw new UnauthorizedException('You are not authorized');
		return res.send('Hello');
	} catch (error) {
		next(error);
	}
});

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
