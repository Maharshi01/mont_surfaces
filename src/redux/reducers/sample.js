import constant from '../constant';

const DEFAULT_STATE = {
    loginData: {
        token: '',
    }
};

export default function Sample(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case constant.CLEAR_DATA:
            return {
                ...DEFAULT_STATE
            };
        case constant.LOGIN_DATA:
            return {
                ...state,
                loginData: { ...action.payload }
            }
        default:
            return state;
    }
}
