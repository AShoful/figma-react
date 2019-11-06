import { DEFAULT_LANG } from '../constants/constants';

const langRoutesMap = {
    ua: '',
    ru: '/ru'
};

export default function getLangRoute (lang = DEFAULT_LANG) {
    return langRoutesMap[lang];
};
