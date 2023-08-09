import { FORM_ARRAY_FIELDS_UPDATE } from "../constants"

const formReducer = (state, action) => {
    if (action.type == FORM_ARRAY_FIELDS_UPDATE) {
      let data = [...state.data]
      const { value, index_array } = action
      console.log('coming here');
      // if (index_array.length == 1) {
      //   data[index_array[0]].value = value
      // }
      // else if (index_array.length == 2) {
      //   data[index_array[0]].fields[index_array[1]].value = value
      // }
      // else if (index_array.length == 3) {
      //   data[index_array[0]].fields[index_array[1]].fields[index_array[2]].value = value
      // }
      return state
    }
    return state;
  }

  export default formReducer;

// import { FORM_ARRAY_FIELDS_UPDATE } from "../constants"

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case FORM_ARRAY_FIELDS_UPDATE:
//       console.log('action', action);
//       return state
//     default:
//       return state;
//   }

// }

// export default formReducer;

/**
 *   if (action.type === FORM_ARRAY_FIELDS_UPDATE) {
    let data = [...state]
    const { value, index_array } = action

    console.log('action', value, index_array);
    // if (index_array.length == 1) {
    //   data[index_array[0]].value = value
    // }
    // else if (index_array.length == 2) {
    //   data[index_array[0]].fields[index_array[1]].value = value
    // }
    // else if (index_array.length == 3) {
    //   data[index_array[0]].fields[index_array[1]].fields[index_array[2]].value = value
    // }
    return data
  }
  return state;
 */


// import { array } from "prop-types";
// import { FORM_ARRAY_FIELDS_UPDATE } from "../constants"

// const equalsCheck = (a, b) => {
//   return JSON.stringify(a) === JSON.stringify(b);
// }

// const formReducer = (state, action) => {

//   switch (action.type) {
//     case FORM_ARRAY_FIELDS_UPDATE:

//       if (!(state?.form_rendered == true)) return state
//       let data = [...state.data]
//       let prev_index_array = state?.index_array ? [...state?.index_array] : []
//       const { value, index_array } = action
//       console.log('formState index_array', index_array, 'prev', prev_index_array);
//       console.log('formState index_array isMached', equalsCheck(prev_index_array, index_array));

//       if (index_array && index_array.length > 0) {
//         if (index_array.length == 1) {
//           data[index_array[0]].value = value
//           data[index_array[0]].active = true
//         }
//         else if (index_array.length == 2) {
//           data[index_array[0]].fields[index_array[1]].value = value
//           data[index_array[0]].fields[index_array[1]].active = true
//         }
//         else if (index_array.length == 3) {
//           data[index_array[0]].fields[index_array[1]].fields[index_array[2]].value = value
//           data[index_array[0]].fields[index_array[1]].fields[index_array[2]].active = true
//         }
//       }
//       if (prev_index_array.length > 0 && !equalsCheck(prev_index_array, index_array)) {

//         if (prev_index_array.length == 1) {
//           data[prev_index_array[0]].isCompleted = true
//           data[prev_index_array[0]].active = false
//         }
//         else if (prev_index_array.length == 2) {
//           data[prev_index_array[0]].fields[prev_index_array[1]].isCompleted = true
//           data[prev_index_array[0]].fields[prev_index_array[1]].active = false
//         }
//         else if (prev_index_array.length == 3) {
//           data[prev_index_array[0]].fields[prev_index_array[1]].fields[prev_index_array[2]].isCompleted = true
//           data[prev_index_array[0]].fields[prev_index_array[1]].fields[prev_index_array[2]].active = false
//         }
//       }

//       return {
//         ...state,
//         index_array: index_array,
//         data: data
//       }

//     case 'SET_FORM_RENDERED':
//       return {
//         ...state,
//         form_rendered: true
//       }
//     default:
//       return state;
//   }
// }

// export default formReducer;
