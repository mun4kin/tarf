export interface IProduct {
  id: string; // Внутренний системный идентификатор
  user: string; // Идентификатор пользователя (создателя)
  createdDate: Date; // Дата создания
  productStatus: [
    {
      id: string; // Ключ на статус
      productStatusName: string; // Наименование статуса
    }
  ],
  productVersion: string; // Версия
  startDate: Date; // Дата начала действия
  endDate: Date; // Дата окончания действия
  productType: [
    {
      id: string; // Ключ на тип продукта
      productType: string; // Наименование типа продукта
    }
  ],
  productLine: [
    {
      id: string; // Ключ на продуктовый ряд
      lineCode: number; // Код продуктового ряда
      productLine: string; // Продуктовый ряд
    }
  ],
  productGroup: [
    {
      id: string; // Ключ на продуктовую группу
      groupCode: number; // Код продуктовой группы
      productGroup: string; // Продуктовая группа
    }
  ],
  productCode: number; // Код продукта
  productName: string; // Наименование продукта
  productOwner: [
    {
      id: string; // Ключ на владельца продукта
      productOwner: string; // Наименование владельца продукта
    }
  ],
  priceParameters: string[]; // Ценовые параметры
  nonPriceParameters: string; // Неценовые параметры
  productOptions: string; // Опции
  implementationDefinition: string; // Описание Процесса реализации
  sppiTest: [
    {
      id: string; // Внутренний системный идентификатор
      sppiTest: string; // Pезультат SPPI-теста
    }
  ],
  accountingModel: [
    {
      id: string; // Внутренний системный идентификатор
      accountingModel: string; // Модель учета
    }
  ],
  marketability: [
    {
      id: string; // Внутренний системный идентификатор
      marketability: string; // Рыночность
    }
  ],
  productRate: string; // Рыночная ставка
  risks: string; // Риски
  productInfo: string; // Порядок (???) раскрытия информации о Продукте
  productCodeAbc: string; // Код продукта в АБС
  planStartDate: Date; // Плановая дата запуска (начала продаж)
  otherInformation: string; // Иное
  customerSegment: [
    {
      id: string; // Внутренний системный идентификатор
      customerSegment: string; // Наименование клиентского сегмента
      customerSegmentCut: string; // Сокращение клиентского сегмента
    }
  ],
  productChannel: [
    {
      id: string; // Внутренний системный идентификатор
      productChannel: string; // Наименование канала продаж
      productChannelCut: string; // Сокращение канала продаж
    }
  ],
  closedProduct: [null];
  complexProduct: [null];
  relatedProduct: [null];
  itSystems: [
    {
      id: string; // Внутренний системный идентификатор
      itSystems: string; // IT система
    }
  ]
}
