import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface customerState {
  value: Customer[];
}

interface addFoodCustomerPayload {
  food: string;
  id: string;
}

const initialState: customerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomers: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodArray: (state, action: PayloadAction<addFoodCustomerPayload>) => {
      state.value.forEach((e) => {
        if (e.id === action.payload.id) {
          e.food.push(action.payload.food);
        }
      });
    },
    removeCustomer: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addCustomers, addFoodArray, removeCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
