import { SET_LANG } from '../types/types';
import { DEFAULT_LANG } from '../../constants/constants';

const initialState = {
    lang: DEFAULT_LANG
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_LANG:
        return { ...state, lang: action.payload };
    default:
        return state;
    }
}
