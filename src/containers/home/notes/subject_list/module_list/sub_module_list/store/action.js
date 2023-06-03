import { getData } from "config";
import firestore from '@react-native-firebase/firestore';

export const get_sub_modules_lists = (subject_id, module_id) => async dispatch => {
    try {
        console.log('callling')
        firestore()
            .collection('store')
            .doc(subject_id)
            .collection("modules")
            .doc(module_id)
            .collection("sub_modules")
            .get()
            .then(async querySnapshot => {
                const modules_list = [];
                let id = null;
                await querySnapshot.forEach(documentSnapshot => {
                    id = documentSnapshot.id;
                    modules_list.push(documentSnapshot.data());
                });
                dispatch({ type: 'SUB_MODULE_LIST_SUCCESS', payload: modules_list, id: id });
            });

        return null;

    } catch (err) {
        console.log(err)
    }
};