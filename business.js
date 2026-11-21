export const business = {
  "name": "НН Реклама",
  "slug": "nn-reklama",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Объёмные световые буквы",
      "detail": "Световые надписи и логотипы для фасадов и интерьеров.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Объёмные световые буквы"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Световые короба",
      "detail": "Лайтбоксы для фасадов и входных групп.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Световые короба"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Оформление витрины",
      "detail": "Графика для остекления, витрин и окон.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Оформление витрины"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Согласование и монтаж",
      "detail": "Подготовка к размещению и установка конструкции на объекте.",
      "group": "Монтаж и проектирование",
      "photo": "",
      "url": "",
      "imageAlt": "Согласование и монтаж"
    },
    {
      "id": "p5",
      "oldIndex": null,
      "name": "Аптечные кресты",
      "detail": "Готовое направление производства световых элементов для аптек. Для заявки укажите размер и место монтажа.",
      "group": "Вывески",
      "photo": "",
      "url": "https://nn-reklama.ru/bukvy/",
      "imageAlt": "Аптечные кресты"
    },
    {
      "id": "p6",
      "oldIndex": null,
      "name": "Стенды и информационные таблички",
      "detail": "Навигация для помещений и объявления для посетителей. Для каждого изделия можно указать свой размер и количество.",
      "group": "Навигация",
      "photo": "",
      "url": "https://nn-reklama.ru/tables/",
      "imageAlt": "Стенды и информационные таблички"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Объёмные световые буквы",
      "label": "Базовый ориентир",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 80 ₽/см высоты",
      "rules": "На главной указан ориентир по сроку 4–6 дней. Итог зависит от исполнения.",
      "url": "https://nn-reklama.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p1",
      "productLabel": "Объёмные световые буквы",
      "label": "Открытая пиксельная подсветка",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 150 ₽/см",
      "rules": "Тариф для указанного вида открытой подсветки.",
      "url": "https://nn-reklama.ru/bukvy/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p2",
      "productLabel": "Световые короба",
      "label": "Короб",
      "quantity": null,
      "displayQuantity": null,
      "price": "8 500 ₽/м²",
      "rules": "Цена на главной. Объём работ подтверждается после замера.",
      "url": "https://nn-reklama.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p5",
      "productLabel": "Аптечные кресты",
      "label": "Световой крест",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 10 000 ₽",
      "rules": "Минимальный ориентир на странице производства объёмных букв.",
      "url": "https://nn-reklama.ru/bukvy/",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "size",
      "label": "Ширина × высота, см",
      "type": "text",
      "applies": null
    },
    {
      "key": "amount",
      "label": "Количество",
      "type": "number",
      "applies": null
    },
    {
      "key": "placement",
      "label": "Место размещения",
      "type": "select",
      "options": [
        "Фасад",
        "Интерьер",
        "Витрина"
      ],
      "applies": null
    },
    {
      "key": "light",
      "label": "Подсветка",
      "type": "select",
      "options": [
        "Нужна",
        "Без подсветки",
        "Нужно подобрать"
      ],
      "applies": null
    },
    {
      "key": "address",
      "label": "Адрес объекта",
      "type": "text",
      "applies": null
    },
    {
      "key": "installation",
      "label": "Монтаж",
      "type": "select",
      "options": [
        "Нужен",
        "Своими силами",
        "Нужно обсудить"
      ],
      "applies": null
    },
    {
      "key": "approval",
      "label": "Помощь с согласованием",
      "type": "select",
      "options": [
        "Нужна",
        "Не требуется",
        "Нужно уточнить"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Макет или фото объекта"
};
