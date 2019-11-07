/* eslint-disable max-len */
import manufacturing from '../../../components/Advantages/img/manufacturing.png'
import medal from '../../../components/Advantages/img/medal.png';
import warehouse from '../../../components/Advantages/img/warehouse.png'; 
import warranty from '../../../components/Advantages/img/warranty.png';
import deliveryTruck from '../../../components/Advantages/img/delivery-truck.png'


export default {
    menu: {
        main: 'Головна',
        products: 'Продукція',
        delivery: 'Доставка',
        about: 'Про нас',
        advantages: 'Чому Ми',
        contacts: 'Контакти'
    },
    header: {
        nameCompany: 'ТОВ "ВКП "Укрпелетекспорт"',
        addressCompanyTop: 'с. Погреби, вул. Промислова, 12',
        addressCompanyBottom: 'Київська обл., Броварський р-н.',
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
        placeholder: 'Пошук'
    },
    description:{
        title: 'Пелети паливні',
        subtitle: '100 %  деревина',
        text: 'Діаметр 8 мм'
    },
    order: {
        price:[2300, 9300],
        descriptionPrice: 'грн за 1 тонну\nбез пдв',
        descriptionLeft: 'бiг-бег\n800-1600 кг',
        descriptionRight: 'Мiшок 15 кг\nполiетиленовий',
        descriptionButton: 'Замовити\nпелети'
    },
    advantages: [
        {
            texts: {
                title: 'Власне виробництво\nповного циклу',
                description: `- 3 стадії подрібнення\n- Сушка\n- Гранулювання\n- Охолодження\n- Просіювання\n- Фасування\n- Зберігання` 
            },
            imageSrc: manufacturing
        },
        {
            texts: {
                title: 'Стабільність споживчих\nхарактеристик',
                description: `Пропонуємо пелети тільки власного\nвиробництва! 8 років нашого досвіду
                    підтверджують\nнезмінні показники якості, для того,\nщоб Ваш котел працював стабільно\nбез надокучливих\nпереналаштувань.` 
                
            },
            imageSrc: medal
        },
        {
            texts: {
                title: ' Запас пелет поруч\nз Вами',
                description: `Нас легко побачити на власні очі,\nвзяти зразок і перевірити якість. Ми тут постійно. Нас не\nтреба буде завтра шукати:) На наших
                    власних складах завжди готова\nпродукція для Вас.` 
            },
            imageSrc: warehouse
        },
        {
            texts: {
                title: 'Гарантуємо поставки на весь\nопалювальний сезон',
                description: 'Гарантія поставок відповідно до\nдомовленостей.\nМи приймаємо тільки ті замовлення,\nякі нам під силу! Впевнитись легко:)' 
            },
            imageSrc: warranty
        },
        {
            texts: {
                title: 'Зручна та швидка\nдоставка',
                description: 'Лише зателефонуйте нам - і чемні\nта відповідальні водії доставлять\nпелети від 15 кг до 22 тонн вчасно!' 
            },
            imageSrc: deliveryTruck
        }
    ],
    products: {
        title: 'Продукція'        
    },
    about: {
        title: 'Про нашу компанію'
    },
    contact: {
        title: 'Телефонуйте (050) 1234567'
    },
    delivery: {
        title: 'Замовити доставку'
    },
    advantagesPage: {
        title: 'Наши переваги'
    }
};
