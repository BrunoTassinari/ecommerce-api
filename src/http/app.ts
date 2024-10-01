import express from 'express';
import { UnauthorizedException } from '../exceptions/unauthorized-exception';
import { notFoundHandler } from '../middlewares/not-found-handler';
import { errorHandler } from '../middlewares/error-handler';
import { logHandler } from '../middlewares/log-handler';

const app = express();

app.use(express.json());
app.use(logHandler);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
app.get('/', (req: any, res: any, next: any) => {
	try {
		//throw new UnauthorizedException('You are not authorized');
		res.send('Hello');
	} catch (error) {
		next(error);
	}
});

app.all('*', notFoundHandler);
app.use(errorHandler);

export { app };
