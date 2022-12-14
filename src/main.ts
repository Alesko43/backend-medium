if (!process.env.IS_TS_NODE) {
	require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule, { cors: true });
	app.setGlobalPrefix('api');
	await app.listen(3000);
}
bootstrap();
