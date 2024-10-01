// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const logHandler = (req: any, res: any, next: any) => {
	const startTime = Date.now();

	res.on('finish', () => {
		const endTime = Date.now();
		const isError = res.statusCode >= 400;
		const duration = endTime - startTime;

		if (isError) return;

		console.log(
			`[${req.method}] - ${req.url} - ${res.statusCode} - ${duration}ms`,
		);
	});

	next();
};
