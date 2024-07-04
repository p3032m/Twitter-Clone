import { registerAs } from '@nestjs/config';

export default registerAs('CONFIGS', () => ({
  DATABASE_URL:
    'mongodb://localhost:27017/',
  PORT: 3001,
  JWT_SECRET: '2EhG8u5VqW54W4Ux9A3f7RbE6S2e0BdK',
}));
