import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";

//루트리듀서는 임의로 정해준 이름
//인덱스파일은 /하고 밑에 더 안써도 자동으로 읽음

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
//createstore은 컴바인리듀서를 사용해서 컴바인한걸 받음
//thunk도 써줬어야하고 이걸 받을 apply도 썼어야했고
//뎁툴도 썼었는데 귀찮아서 다 자동으로 하게해줌

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
