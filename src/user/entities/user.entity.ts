import { Column, Model, Table, Unique, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Unique
  @Column
  email: string;

  @Column
  hash: string;

  @Column({ defaultValue: false })
  is_verified: boolean;

  @Column
  referred_by: number;

  @Column(DataType.DATE)
  last_login: Date;

  @Column
  first_name: string;

  @Column
  middle_name: string;

  @Column
  last_name: string;

  @Column
  nickname: string;

  @Column
  citizen_id: string;

  @Column
  passport_no: string;

  @Column
  nationality: string;

  @Column
  ethnicity: string;

  @Column(DataType.DATEONLY)
  birth_date: Date;

  @Column
  gender: string;

  @Column(DataType.ARRAY(DataType.TEXT))
  phone: string[];

  @Column
  profile_image: string;
}
