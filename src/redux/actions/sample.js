import constant from '../constant';

export function clearData() {
    return {
        type: constant.CLEAR_DATA,
        payload: null
    }
}

export function storeLoginData(data) {
    return {
        type: constant.LOGIN_DATA,
        payload: data
    }
}