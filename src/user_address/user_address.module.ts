import { Module } from '@nestjs/common';
import { UserAddressService } from './user_address.service';
import { UserAddressController } from './user_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserAddress } from './entities/user_address.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserAddress])],
  controllers: [UserAddressController],
  providers: [UserAddressService],
})
export class UserAddressModule {}
