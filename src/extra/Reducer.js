// const initialState ={
//     numbers:[8, 9, 10],
// };
// export default function Reducer (state=initialState,action){
//     // console.log(action);
//     switch(action.type){
//         case"ADD_NUMBER":
//         return {...state, numbers:[...state.numbers, action.payload]}
//         default:
//             return state;
//     }
//     return state;
// }

const initialState = {
    card:[],
    head:{},
  };
  
  export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CARD":
        return { ...state, card: [...card, action.payload] };
        case "ADD_HEAD":
        return { ...state, head: [...head, action.payload] };
      
      default:
        return state;
    }
  }