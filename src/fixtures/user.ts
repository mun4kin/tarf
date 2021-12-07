import { IStructure, IUser } from '../types/user.types';

export const userFixtures: IUser = {
  /** Уникальный ID пользователя */
  id: '1',
  /** ФИО */
  fullName: 'Иванов Иван Иванович',
  /** Имя */
  firstName: 'Иван',
  /** Фамилия */
  lastName: 'Иванов',
  /** Отчество */
  middleName: 'Иванович',
  /** Ссылка на фото */
  photo: '/url/photo.jpg',
  /** Должность */
  position: 'Главный',
  /** ID должности  */
  positionId: '5',
  /** Подразделение */
  department: 'Подразделение',
  /** Департамент ID */
  departmentId: '10',
  /** телефон*/
  phone: '+7-911-123-45-67',
  mobilePhonePrivate: '+7-921-123-45-67',
  /** Мобильный телефон*/
  mobilePhone: '+7-951-123-45-67',
  /** Внутренний телефон*/
  internalPhone: '1234',
  /** e-mail*/
  email: 'mail@mail.com',
  /** менеджер (индикатор) */
  manager: true,
  /** Оклад */
  salary: 100000,
  /** Валюта */
  currency: 'RUB',
  /** Орг структура */
  // departmentsPath?: IStructure[];
}
