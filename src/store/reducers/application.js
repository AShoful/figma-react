import { SET_LANG, SET_LANG_ROUTE, } from '../types/types';
import { DEFAULT_LANG, DEFAULT_LANG_ROUTE } from '../../constants/constants';

const initialState = {
    lang: DEFAULT_LANG,
    langRoute: DEFAULT_LANG_ROUTE
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_LANG:
        return { ...state, lang: action.payload };
    case SET_LANG_ROUTE:
        return { ...state, langRoute: action.payload };    
    default:
        return state;
    }
}
