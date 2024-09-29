import { BaseException } from '../exceptions/base-exception';

export const errorHandler = (error: Error, req: any, res: any, next: any) => {
	if (error instanceof BaseException) {
		console.error(
			`[${req.method}] - ${req.url} :>> ${error.errorCode} - ${error.stack}`,
		);

		return res.status(error.errorCode).json({
			code: error.errorCode,
			message: error.message,
			stack: error.stack,
		});
	}

	return res.status(500).json({
		code: 500,
		message: error.message,
		stack: error.stack,
	});
};
