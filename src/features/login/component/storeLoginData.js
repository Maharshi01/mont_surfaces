import Storage from '../../../storage'

export default async function storeLoginData(data) {
    if (data != null) {
        await Storage.localData.store(Storage.key.token, JSON.stringify(data))
    }
}