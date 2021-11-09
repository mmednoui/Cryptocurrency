import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptosAPI";
import { cryptoNewsApi } from "../services/cryptosNewsAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
