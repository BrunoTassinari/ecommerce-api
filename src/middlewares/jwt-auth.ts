import jwt, { type VerifyErrors } from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '../exceptions/unauthorized-exception';
import { env } from '../lib/env';
import { tryCatch } from '../lib/try-catch';

const authGuard = tryCatch(async (req, res, next) => {
	if (!req.cookies || !req.cookies.token)
		return next(new UnauthorizedException('No token provided'));

	const token = req.cookies.token;

	jwt.verify(token, env.JWT_SECRET, (error: VerifyErrors | null) => {
		if (error) return next(new UnauthorizedException('Invalid token'));

		next();
	});
});

export { authGuard };
