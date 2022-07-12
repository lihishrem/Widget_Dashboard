import { configureStore } from '@reduxjs/toolkit'
import signatureSlice from './reducer/signatureSlice'
import widgetsSlice from "./reducer/widgetSlice"
export const store = configureStore({
  reducer: {
    widgets: widgetsSlice.reducer,
    signature: signatureSlice.reducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch