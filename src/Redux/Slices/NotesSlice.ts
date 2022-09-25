import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Utility from '../../Utility';
import {AppThunk} from '../store';

export type noteType = {
  id: number;
  title: string;
  content: string;
  type: string;
  label: string;
  media_url: string;
  created_at: string;
  updated_at: string;
  isEdited: boolean;
};

export interface NotesState {
  allNotes: noteType[];
}

const initialState: NotesState = {
  allNotes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addAllNotes: (state, action: PayloadAction<noteType[]>) => {
      state.allNotes = action.payload;
    },
    editNote: (state, action: PayloadAction<noteType>) => {
      state.allNotes = state.allNotes.map((note: noteType) => {
        if (note.id === action.payload.id) {
          action.payload.isEdited = true;
          return action.payload;
        }
        return note;
      });
      saveNotes(state.allNotes);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.allNotes = state.allNotes.filter(
        (note: noteType) => note.id !== action.payload,
      );
      saveNotes(state.allNotes);
    },
    addNewNote: (state, action: PayloadAction<noteType>) => {
      state.allNotes.push(action.payload);
      saveNotes(state.allNotes);
    },
  },
});

export const {addAllNotes} = notesSlice.actions;

const saveNotes =
  (notes: noteType[]): AppThunk =>
  async () => {
    try {
      await Utility.saveNotes(notes);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchNotes = (): AppThunk => async dispatch => {
  const data = await Utility.getNotes();
  dispatch(addAllNotes(data));
};

export default notesSlice.reducer;
