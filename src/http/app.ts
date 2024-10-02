import express from 'express';
import { errorHandler } from '../middlewares/error-handler';
import { logHandler } from '../middlewares/log-handler';
import { notFoundRoute } from './routes/not-found';
import { loginRoute } from './routes/login';
import { tryCatch } from '../lib/try-catch';
import { authGuard } from '../middlewares/jwt-auth';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logHandler);

app.use(loginRoute);

app.get(
	'/hello',
	authGuard,
	tryCatch(async (req, res) => {
		res.status(200).json({ message: 'Hello, World!' });
	}),
);

app.use(notFoundRoute);

app.use(errorHandler);

export { app };
