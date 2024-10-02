import express from 'express';
import { errorHandler } from '../middlewares/error-handler';
import { logHandler } from '../middlewares/log-handler';
import { notFoundRoute } from './routes/not-found';
import { loginRoute } from './routes/login';
import { tryCatch } from '../lib/try-catch';

const app = express();

app.use(express.json());
app.use(logHandler);

app.use(loginRoute);

app.get(
	'/hello',
	tryCatch(async (req, res) => {
		res.status(200).json({ message: 'Hello, World!' });
	}),
);

app.use(notFoundRoute);
app.use(errorHandler);

export { app };
