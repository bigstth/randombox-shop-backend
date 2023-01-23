import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserAddressModule } from './user_address/user_address.module';
import { ShopModule } from './shop/shop.module';
import config from 'config/configuration';
import { User } from './user/entities/user.entity';
import { UserAddress } from './user_address/entities/user_address.entity';
import { Shop } from './shop/entities/shop.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: config.host,
      port: config.port,
      username: config.user,
      password: config.password,
      database: config.database,
      models: [User, UserAddress, Shop],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    UserAddressModule,
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
