import {configureStore, Action} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import NotesSlice, {noteType} from './Slices/NotesSlice';

const store = configureStore({
  reducer: NotesSlice,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = (selector: (state: RootState) => any) =>
  useSelector(selector);
export type AppThunk = ThunkAction<void, noteType, unknown, Action<string>>;

export default store;
