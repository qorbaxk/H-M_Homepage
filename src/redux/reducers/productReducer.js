import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectItem: null,
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };

//     case "GET_DETAIL_SUCCESS":
//       return { ...state, selectItem: payload.data };

//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

//3개의 필드는 반드시 존재해야함
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //닷닷닷스테이트 안써도 되고 리턴 안써도 됨
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getDetailProducts(state, action) {
      state.selectItem = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
