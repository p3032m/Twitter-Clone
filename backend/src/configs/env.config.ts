import { registerAs } from '@nestjs/config';

export default registerAs('CONFIGS', () => ({
  DATABASE_URL:
    'mongodb+srv://admin:o1V2W5u9B1cmd2LZ@twitter-clon.mmnijt2.mongodb.net/?retryWrites=true&w=majority&appName=twitter-clon',
  PORT: 3001,
  JWT_SECRET: '2EhG8u5VqW54W4Ux9A3f7RbE6S2e0BdK',
}));
