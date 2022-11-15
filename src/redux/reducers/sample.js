import constant from '../constant';

const DEFAULT_STATE = {
    addCount: {
        count: 0,
    },
};

export default function Sample(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case constant.ADD_COUNT:
            return {
                ...state,
                addCount: {...action.payload},
            };
        case constant.CLEAR_DATA:
            return {
                ...DEFAULT_STATE
            };
        default:
            return state;
    }
}
