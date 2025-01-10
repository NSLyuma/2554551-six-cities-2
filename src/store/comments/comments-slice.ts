import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseStatus } from '../../const';
import { CommentsState } from '../../lib/types/store';
import { SingleComment } from '../../lib/types/comment';
import { createComment, getComments } from '../api-actions';

const initialState: CommentsState = {
  comments: [],
  commentsResponseStatus: ResponseStatus.Idle,
  commentResponseStatus: ResponseStatus.Idle,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getComments.pending, (state) => {
        state.comments = [];
        state.commentsResponseStatus = ResponseStatus.Pending;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsResponseStatus = ResponseStatus.Success;
      })
      .addCase(getComments.rejected, (state) => {
        state.comments = [];
        state.commentsResponseStatus = ResponseStatus.Error;
      })
      .addCase(createComment.pending, (state) => {
        state.commentResponseStatus = ResponseStatus.Pending;
      })
      .addCase(
        createComment.fulfilled,
        (state, action: PayloadAction<SingleComment>) => {
          state.comments.push(action.payload);
          state.commentResponseStatus = ResponseStatus.Success;
        }
      )
      .addCase(createComment.rejected, (state) => {
        state.commentResponseStatus = ResponseStatus.Error;
      }),
});

export default commentsSlice.reducer;
