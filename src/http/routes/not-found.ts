import { Router } from 'express';
import { NotFoundException } from '../../exceptions/not-found-exceptions';

const notFoundRoute = Router();

notFoundRoute.all('*', (req, res, next) => {
	next(new NotFoundException('Not Found'));
});

export { notFoundRoute };
