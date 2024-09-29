import express from 'express';

const app = express();

app.use(express.json());

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
app.get('/', (req: any, res: any) => {
	return res.send('Hello');
});

export { app };
