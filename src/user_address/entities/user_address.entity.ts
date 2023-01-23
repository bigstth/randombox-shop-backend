import {
  Column,
  Model,
  Table,
  Unique,
  BelongsTo,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

@Table
export class UserAddress extends Model {
  @Column
  descroption: string;

  @Column
  road: string;

  @Column({ defaultValue: false })
  sub_district: boolean;

  @Column
  district: number;

  @Column(DataType.DATE)
  province: Date;

  @Column
  country: string;

  @Column
  zip_code: string;

  @Column
  remark: string;

  @Column
  nickname: string;

  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
