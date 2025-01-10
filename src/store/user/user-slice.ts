import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, ResponseStatus } from '../../const';
import { UserState } from '../../lib/types/store';
import { checkLogin, login, logout } from '../api-actions';
import { User } from '../../lib/types/user';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  loginResponseStatus: ResponseStatus.Idle,
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkLogin.fulfilled, (state, action: PayloadAction<User>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = undefined;
      })
      .addCase(login.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
        state.loginResponseStatus = ResponseStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.loginResponseStatus = ResponseStatus.Success;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginResponseStatus = ResponseStatus.Error;
        state.user = undefined;
      })
      .addCase(logout.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = undefined;
      }),
});

export default userSlice.reducer;
