import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {

    }
};

const multiStore = (key, value, completion) => {
    AsyncStorage.multiSet(key, value).then(completion)
}

const retrive = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
        // alert(error)
    }
}

const remove = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
    }
}

export default {
    localData: {
        store: store,
        retrive: retrive,
        remove: remove,
        multiStore: multiStore,
    }, key: {
        token: 'token',
    }
}
