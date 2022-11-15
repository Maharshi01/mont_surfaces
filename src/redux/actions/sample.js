import constant from '../constant';

export function addCount(data) {
    return {
        type: constant.ADD_COUNT,
        payload: data
    }
}

export function clearData() {
    return {
        type: constant.CLEAR_DATA,
        payload: null
    }
}