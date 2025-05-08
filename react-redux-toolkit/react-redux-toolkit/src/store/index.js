import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { countValue: 0 },
	reducers: {
		increment: (state) => {
			state.countValue++;
		},
		decrement: (state) => {
			state.countValue--;
		},
		add: (state, action) => {
			state.countValue = state.countValue + Number(action.payload);
		},
		subtract: (state, action) => {
			state.countValue = state.countValue - Number(action.payload);
		},
	},
});
const counterStore = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});
export const { increment, decrement, add, subtract } = counterSlice.actions;
export default counterStore;
