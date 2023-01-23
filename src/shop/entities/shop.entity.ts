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
export class Shop extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column({ defaultValue: true })
  is_open: boolean;

  @Unique
  @Column
  slug: string;


  @Column
  open_date: string;

  @Column
  contact_info: string;

  @Column
  map_url: string;

  @Column
  nickname: string;

  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
