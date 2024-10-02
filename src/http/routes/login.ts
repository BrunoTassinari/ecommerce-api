import jwt from 'jsonwebtoken';
import { Router } from 'express';

import { tryCatch } from '../../lib/try-catch';
import { UnauthorizedException } from '../../exceptions/unauthorized-exception';
import { env } from '../../lib/env';

const loginRoute = Router();

const testUser = {
	username: 'test',
	password: 'test',
};

loginRoute.post(
	'/login',
	tryCatch(async (req, res, next) => {
		const { username, password } = req.body;

		if (unvalidUser(username, password))
			throw new UnauthorizedException('Invalid username or password');

		const token = jwt.sign({ username }, env.JWT_SECRET, {
			expiresIn: '1h',
		});

		res.cookie('token', token, {
			httpOnly: true, // Protege contra XSS
			secure: true, // Só envia o cookie em conexões HTTPS
			sameSite: 'strict', // Protege contra CSRF
			maxAge: 3600000, // Expira após 1 hora
		});

		res.status(200).json({ message: 'Login successful' });
		return;
	}),
);

const unvalidUser = (username: string, password: string) => {
	return (
		!username ||
		!password ||
		username !== testUser.username ||
		password !== testUser.password
	);
};

export { loginRoute };
