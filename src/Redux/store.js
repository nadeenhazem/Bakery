import { configureStore } from "@reduxjs/toolkit";
import ChangeDataSlice from "./Slice/ChangeDataSlice";
import FetchDataSlice from "./Slice/FetchDataSlice";
const store=configureStore({
    reducer:{
        fetchAllData:FetchDataSlice,
        changeData:ChangeDataSlice
    }
})
export default store