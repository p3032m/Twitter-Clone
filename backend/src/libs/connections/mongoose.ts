import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseModuleAsyncOptions,
} from '@nestjs/mongoose';

export const mongooseConnectionConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<MongooseModuleOptions> => ({
    uri: configService.get<string>('CONFIGS.DATABASE_URL'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};
