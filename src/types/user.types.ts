export interface IStructure {
  id: string;
  name: string;
  unitType: string;
  unitTypeDesc: string;
}

export interface IUser {
  /** Уникальный ID пользователя */
  id: string;
  /** ФИО */
  fullName: string;
  /** Имя */
  firstName: string;
  /** Фамилия */
  lastName: string;
  /** Отчество */
  middleName: string;
  /** Ссылка на фото */
  photo: string;
  /** Должность */
  position: string;
  /** ID должности  */
  positionId?: string;
  /** Подразделение */
  department: string;
  /** Департамент ID */
  departmentId?: string;
  /** телефон*/
  phone?:string;
  mobilePhonePrivate?:string;
  /** Мобильный телефон*/
  mobilePhone?:string;
  /** Внутренний телефон*/
  internalPhone?:string;
  /** e-mail*/
  email?:string;
  /** менеджер (индикатор) */
  manager?:boolean;
  /** Оклад */
  salary?: number;
  /** Валюта */
  currency?: string;
  /** Орг структура */
  departmentsPath?: IStructure[];
}
