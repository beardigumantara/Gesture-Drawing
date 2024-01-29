// import { createSlice } from "@reduxjs/toolkit";
// import { GESTURE_STATES } from "../lib/util";
// import useModel from "../hooks/useModel";

// const gestureSlice = createSlice({
//   name: "gesture",
//   initialState: {
//     gestureState : GESTURE_STATES.EMPTY,
//     theme: undefined,
//   },
//   reducers: {
//     setGestureState: (state, action) => {
//       state.gestureState = action.payload;
//     },
//     setTheme: (state, action) => {
//       state.theme = action.payload;
//     },
//   },

//   calculateNextGestureState: (state) => {
//     const {hasModel} = useModel();
//     switch (state.gestureState) {
//       case GESTURE_STATES.REGISTER:
//         return GESTURE_STATES.READY;
//       case GESTURE_STATES.READY:
//         return GESTURE_STATES.MATCH;
//       case GESTURE_STATES.MATCH:
//         return hasModel ? GESTURE_STATES.READY : GESTURE_STATES.ENDING;
//       case GESTURE_STATES.ENDING:
//       default:
//         return state.gestureState;
//     }
//   }
  
// });

// export const { setGestureState, setTheme, calculateNextGestureState } = gestureSlice.actions;
// export default gestureSlice.reducer;