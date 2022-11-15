// import AsyncStorage from '@react-native-async-storage/async-storage';

// const store = async (key, value) => {
    
//     try {
//         // if (key == '@umobile:pin') {
//         //     let encryptedValue = encryptData(value)
//         //     await AsyncStorage.setItem(key, encryptedValue); 
//         // } else {
//         //     await AsyncStorage.setItem(key, value);
//         // }
//         // await AsyncStorage.setItem(key, value);
//         let encryptedValue = encryptData(value)
//             await AsyncStorage.setItem(key, encryptedValue); 
//     } catch (error) {

//     }
// };

// const multiStore = (key, value, completion) => {
//     AsyncStorage.multiSet(key, value).then(completion)
// }

// const retrive = async (key) => {
//     try {
//         // if (key == '@umobile:pin') {
//         //     let value = await AsyncStorage.getItem(key)
//         //     return decryptData(value)
//         // } else {
//         //     return await AsyncStorage.getItem(key)
//         // }
//         //  return await AsyncStorage.getItem(key)

//         let value = await AsyncStorage.getItem(key)
//         if (key === '@umobile:msisdn' || key === '@umobile:pin'|| key === '@umobile:isBioAuth'){
//             let parsedValue = parseInt(value)            
//             if (!isNaN(parsedValue)){
//                 return value
//             }else{
//                 return decryptData(value)
//             }
//         }
//         else {
//             return decryptData(value)            
//         }
//     } catch (error) {
//         // alert(error)
//     }
// }

// const remove = async (key) => {
//     try {
//         await AsyncStorage.removeItem(key)
//     } catch (error) {

//     }
// }

// export default {
//      localData: {
//         store: store,
//         retrive: retrive,
//         remove: remove,
//         multiStore: multiStore,
//     }, key: {
//         mobile: 'mobile',
//         pin: 'pin',
//         token: 'token',
//     }
// }
