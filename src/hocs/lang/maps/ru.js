import manufacturing from '../../../components/Advantages/img/manufacturing.png'
import medal from '../../../components/Advantages/img/medal.png';
import warehouse from '../../../components/Advantages/img/warehouse.png'; 
import warranty from '../../../components/Advantages/img/warranty.png';
import deliveryTruck from '../../../components/Advantages/img/delivery-truck.png'

export default {
    menu: {
        main: 'Главная',
        products: 'Продукция',
        delivery: 'Доставка',
        about: 'О нас',
        advantages: 'Почему мы',
        contacts: 'Контакти'
    },
    header: {
        nameCompany: 'ООО “ПКП “Укрпелетэкспорт”',
        addressCompanyTop: 'с. Погребы, ул. Промышленная, 12',
        addressCompanyBottom: 'Киевская обл., Броварской район',
        phone: ['(097) 123-45-67','(066) 987-54-32']
    },
    footer: {
        title: 'Меню',
        title2: 'Контакты',
        contacts: {
            shedule: 'Пн-Сб 10:00 - 18:00',
            phone: '+38(050)-123-45-67',
            mail: 'example@gmail.com'
        },
        placeholder: 'Поиск'
    },
    description:{
        title: 'ПЕЛЛЕТЫ ТОПЛИВНЫЕ',
        subtitle: '100% древесина',
        text: 'Диаметр 8 мм'
    },
    order: {
        price:[2300, 9300],
        descriptionPrice: 'грн за 1 тонну\nбез НДС',
        descriptionLeft: 'биг-бэг\n800-1600 кг',
        descriptionRight: 'Мешок 15 кг\nполиэтиленовый',
        descriptionButton: 'Заказать\nпеллеты'
    },
    advantages:[
        {
            texts: { title: 'Собственное производство\nполного цикла',
                    description: `- 3 стадии измельчения\n- Сушка\n- Гранулирование\n- Охлаждение\n- Просеивание\n- Фасовка\n- Хранение` 
            },
            imageSrc: manufacturing
        },
        {
            texts:  { title: 'Стабильность потребительских\nхарактеристик',
                    description: `Предлагаем пеллеты только собственного\nпроизводства! 8 лет нашего опыта
                    подтверждают неизменные показатели качества, для того,\nчтобы Ваш котел работал стабильно\nбез навязчивых перенастроек.` 
            },
            imageSrc: medal
        },
        {
            texts:  { title: ' Запас пеллет рядом\nс Вами',
                    description: `Нас легко увидеть воочию,\nвзять образец и проверить качество. Мы постоянно здесь, круглый год:) Завтра нас не
                    надо будет искать:) На наших\nскладах всегда готовы\nпеллеты для Вас.` 
            },
            imageSrc: warehouse
        },
        {
            texts:  { title: 'Гарантируем поставки на весь\nотопительный сезон',
                    description: 'Гарантия поставок в соответствии с\nдоговоренностями.\nМы принимаем только те заказы,\nкоторые нам под силу! Убедиться легко!' 
            },
            imageSrc: warranty
        },
        {
            texts: { title: 'Простой заказ и быстрая\nдоставка',
                    description: 'Всего лишь позвоните нам \n- и ответственные водители\nвовремя доставят пеллеты\nот 15 кг до 22 тонн.' 
            },
            imageSrc: deliveryTruck
        }
    ],
    products: {
        title: 'Продукция'
    },
    about: {
        title: 'О нашей компании'
    },
    contact: {
        title: 'Позвоните по тел. (050) 1234567'
    },
    delivery: {
        title: 'Заказать доставку'
    },
    advantagesPage: {
        title: 'Наши преймущества'
    }
};
