import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../middlewares/error-handler';
import { logHandler } from '../middlewares/log-handler';
import { notFoundRoute } from './routes/not-found';

const app = express();

app.use(express.json());
app.use(logHandler);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	try {
		//throw new UnauthorizedException('You are not authorized');
		res.send('Hello');
	} catch (error) {
		next(error);
	}
});

app.use(notFoundRoute);
app.use(errorHandler);

export { app };
