import { env } from './lib/env';
import { app } from './http/app';

app.listen(env.PORT, () => {
	console.log(`Listening on port ${env.PORT}`);
});
