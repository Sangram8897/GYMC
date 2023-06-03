import { getData } from "config";
import firestore from '@react-native-firebase/firestore';

export const get_subjects_lists = () => async dispatch => {
    try {
        firestore()
            .collection('store')
            .get()
            .then(async querySnapshot => {
                // console.log('User ID: ', querySnapshot.id,);
                const modules_list = [];
                await querySnapshot.forEach(async documentSnapshot => {
                    // console.log('User ID: ', documentSnapshot.id,);
                    let data = documentSnapshot.data();
                    data.id = documentSnapshot.id;
                    modules_list.push(data);
                });
                dispatch({ type: 'SUBJECT_LIST_SUCCESS', payload: modules_list });
            });

        return null;

    } catch (err) {
        console.log(err)
    }
};

export const set_subject_id = (sub_id) => async dispatch => {
    dispatch({ type: 'SET_SUBJECT_ID', payload: sub_id });
};