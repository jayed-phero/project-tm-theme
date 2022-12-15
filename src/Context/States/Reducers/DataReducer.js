// import { FATCHING_ERROR, FATCHING_START, FATCHING_SUCCESS } from "../actionTypes/actionTypes"

// export const initialState = {
//     loading: false,
//     jsonData: [],
//     error: false
// }
// export const dataReducer = (state, action) => {
//     switch (action.type) {
//         case FATCHING_START:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case FATCHING_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 jsonData: action.payload
//             }
//         case FATCHING_ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 error: true,
//             }
//         default:
//             return state;
//     }
// } 