import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMethod,
  postMethod,
  deleteMethod,
  putMethod,
} from "../../utils/axios/axios";

export const getMyWidgetsBySignature: any = createAsyncThunk(
  "getUserWidgets/get",
  async (user: any) => {
    const { signature, address } = user;
    const data = await getMethod(
      `getUserWidgets/?&signature=${signature}&address=${address}`
    ).catch((err) => err.response.data);
    console.log("user data from get req", data.data);
    return data.data;
  }
);

// export const getWidgetsById: any = createAsyncThunk(
//   "getUser/get",
//   async (widgetId: string) => {
//     const data = await getMethod(
//       `getWidget?widgetId=${widgetId}`
//     ).catch((err) => err.response.data);
//     console.log("user data from get req", data.data);
//     return data.data;
//   }
// );

interface IUserWidgets {
  widgets: any;
}

const initialState: IUserWidgets = {
  widgets: [],
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyWidgetsBySignature.pending]: (
      state: IUserWidgets,
      action: IUserWidgets
    ) => {},
    [getMyWidgetsBySignature.fulfilled]: (state: IUserWidgets, action: any) => {
      state.widgets = action.payload;
      console.log("state widgets", state.widgets);
    },
    [getMyWidgetsBySignature.rejected]: (
      state: IUserWidgets,
      action: IUserWidgets
    ) => {},
  },
});

export const {} = widgetsSlice.actions;

export default widgetsSlice;
